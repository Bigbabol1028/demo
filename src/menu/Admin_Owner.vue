<template>
    <div>
        <div class="tabname hbox">
            <h1>管理员账户</h1>
            <div class="space"></div>
            <button class="tabnamebtn1">添加</button>
        </div>
        <div class="tabback">
            <el-table :data="tableData1" border>
                <el-table-column prop="number" label="序号" width="130px" />
                <el-table-column prop="name" label="名称" width="200px" />
                <el-table-column prop="address" label="地址" width="450px" />
                <el-table-column prop="state_text" label="验证状态" width="200px" />
                <el-table-column prop="account" label="云钱包账号" width="300px" />
                <el-table-column prop="quantity" label="已应用的权限数量" width="200px" />
            </el-table>
        </div>
        <br>
        <h1>合约权限</h1>
        <div class="tabback">
            <el-table :data="tableData2" border style="width: 100%">
                <el-table-column prop="contract" label="合约" width="574px" />
                <el-table-column prop="permissions" label="权限" width="162px" />
                <el-table-column prop="address" label="权限地址" width="296px" />
                <el-table-column prop="settime" label="设置时间" width="262px" />
                <el-table-column prop="operate" label="操作" width="154px" />
            </el-table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { tableV2GridProps } from 'element-plus/es/components/table-v2/src/grid';
import { ref } from 'vue';

const data = [
    {
        number: '1',
        name: '[项目管理员账户]',
        address: '0x22704345C8649CA4b9f970c616cE7fb5fB1Fdab9',
        state: true,
        //state_text: '',
        account: '234567@abc.com',
        quantity: '12'
    },
    {
        number: '2',
        name: 'abc',
        address: '0xdFb630379ccB11114c31D9e618eB6D1275eDDBCf',
        state: true,
        //state_text: '',
        account: '234567@abc.com',
        quantity: '0'
    },
    {
        number: '3',
        name: '-',
        address: '0x40C7214f2d1312A492DBBc77Bb1D851431ad1678',
        state: false,
        //state_text: '',
        account: '-',
        quantity: '2'
    }
]
const tableData1 = ref([{}]);
/*
tableData1.value.push(
    {
        number: '1',
        name: '[项目管理员账户]',
        address: '0x22704345C8649CA4b9f970c616cE7fb5fB1Fdab9',
        state: true,
        //state_text: '',
        account: '234567@abc.com',
        quantity: '12'
    }    
)

for (let i = 0; i < tableData1.length; i++) {
    if (tableData1[i].state == true)
        tableData1[i].state_text = "已验证";
    else
        tableData1[i].state_text = "未验证";

}
*/
const tableData2 = [
    {
        contract: '[Metaverse合约] (0x7Db439e5862931c53eB3A788F07455373eCAF6EB)',
        permissions: 'owner',
        address: '[项目管理员账户] (0x2270...dab9)',
        settime: '123 days ago',
        operate: '修改',
    },
    {
        contract: '[Metaverse合约] (0x7Db439e5862931c53eB3A788F07455373eCAF6EB)',
        permissions: 'admin',
        address: 'abc (0xdFb6...DBCf)',
        settime: '12 hours ago',
        operate: '修改',
    },
    {
        contract: 'GCOIN (0x1baf38fc8501546fB3598F0530E8C2d2dcC4EfD0)',
        permissions: 'owner',
        address: '[项目管理员账户] (0x2270...dab9)',
        settime: '30 days ago',
        operate: '修改',
    }
]

</script>


<style>
.tabnamebtn1 {
    background-color: #169BD5;
    color: #FFFFFF;
    border-radius: 7px;
    height: 31px;
    width: 140px;
    border: unset;
    margin-top: 30px;
    margin-right: 40px;
}



.tabback {
    border-radius: 25px;
    background-color: #FFFFFF;
    padding: 20px;
    margin: 20px;
    margin-top: 5px;
}

.admin-tab {
    max-width: 1200px;
}
</style>