<template>
    <div>
        <div class="tabname hbox">
            <h1>管理员账户</h1>
            <div class="space"></div>
            <button class="tabnamebtn1" @click="drawerFormVisible = true">添加</button>
            <el-drawer v-model="drawerFormVisible" title="添加" draggable center>
                <el-form :model="drawerForm" :label-position="labelPosition">
                    <el-form-item label="序号">
                        <el-input v-model="drawerForm.number" autocomplete="off" class="dialogForm_number" />
                    </el-form-item>
                    <el-form-item label="名称">
                        <el-input v-model="drawerForm.name" autocomplete="off" class="dialogForm_name" />
                    </el-form-item>
                    <el-form-item label="地址">
                        <el-input v-model="drawerForm.address" autocomplete="off" class="dialogForm_address" />
                    </el-form-item>
                    <el-form-item label="验证状态">
                        <el-select v-model="drawerForm.state_text" placeholder="请选择">
                            <el-option label="已验证" :value="true" />
                            <el-option label="未验证" :value="false" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="云钱包账号">
                        <el-input v-model="drawerForm.account" autocomplete="off" class="dialogForm_account" />
                    </el-form-item>
                    <el-form-item label="已应用的权限数量">
                        <el-input v-model="drawerForm.quantity" autocomplete="off" class="dialogForm_quantity" />
                    </el-form-item>
                </el-form>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="drawerFormVisible = false">
                            Cancel
                        </el-button>
                        <el-button type="primary" @click="add_row">
                            Confirm
                        </el-button>
                    </span>
                </template>
            </el-drawer>
        </div>
        <div class="tabback">
            <el-table :data="tableData1" border style="width:max-content">
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
            <el-table :data="tableData2" border style="width:max-content">
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
import { reactive, ref } from 'vue';
const drawerFormVisible = ref(false)
const labelPosition = ref('top')
const drawerForm = reactive({
    number: '',
    name: '',
    address: '',
    state_text: '',
    account: '',
    quantity: ''
})

function getStateText(_state: any): string {
    let txt = '';
    if (_state)
        return '已验证';
    else
        return '未验证';    
}

function addAccount(_number: any, _name: any, _address: any, _state: any, _account: any, _quantity: any) {
    tableData1.value.push(
        {
            number: _number,
            name: _name,
            address: _address,
            state_text: getStateText(_state),
            account: _account,
            quantity: _quantity
        }
    );
}

function add_row() {
    addAccount(drawerForm.number, drawerForm.name, drawerForm.address, drawerForm.state_text, drawerForm.account, drawerForm.quantity);
    drawerFormVisible.value = false;
}

const data1 = [
    {
        number: '1',
        name: '[项目管理员账户]',
        address: '0x22704345C8649CA4b9f970c616cE7fb5fB1Fdab9',
        state: true,
        account: '234567@abc.com',
        quantity: '12'
    },
    {
        number: '2',
        name: 'abc',
        address: '0xdFb630379ccB11114c31D9e618eB6D1275eDDBCf',
        state: true,
        account: '234567@abc.com',
        quantity: '0'
    },
    {
        number: '3',
        name: '',
        address: '0x40C7214f2d1312A492DBBc77Bb1D851431ad1678',
        state: false,
        quantity: '2'
    }
]
const tableData1: any = ref([]);//

for (let i = 0; i < data1.length; i++) {
    addAccount(data1[i].number, data1[i].name, data1[i].address, data1[i].state, data1[i].account, data1[i].quantity);
}

const data2 = [
    {
        contract_type: 'Metaverse',
        contract: '0x7Db439e5862931c53eB3A788F07455373eCAF6EB',
        permissions: 'owner',
        //name: '项目管理员账户',
        address: '0x22704345C8649CA4b9f970c616cE7fb5fB1Fdab9',
        settime: 1688836550968,
        //operate: '修改',
    },
    {
        contract_type: 'Metaverse',
        contract: '0x7Db439e5862931c53eB3A788F07455373eCAF6EB',
        permissions: 'admin',
        //name: 'abc',
        address: '0xdFb630379ccB11114c31D9e618eB6D1275eDDBCf',
        settime: '12 hours ago',
        operate: '修改',
    },
    {
        contract_type: 'GCOIN',
        contract: '0x1baf38fc8501546fB3598F0530E8C2d2dcC4EfD0',
        permissions: 'owner',
        name: '项目管理员账户',
        address: '0x40C7214f2d1312A492DBBc77Bb1D851431ad1678',
        settime: '30 days ago',
        operate: '修改',
    }
]

const tableData2: any = ref([]);
for (let i = 0; i < data2.length; i++) {
    tableData2.value.push(
        {
            contract: data2[i].contract_type + " " + data2[i].contract,
            permissions: data2[i].permissions,
            address: data2[i].name + " " + data2[i].address,
            settime: data2[i].settime,
            operate: data2[i].operate,
        }
    );

}

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

.dialogForm_number {
    width: 50px;
}

.dialogForm_name {
    width: 200px;
}

.dialogForm_address {
    width: 450px;
}

.dialogForm_account {
    width: 300px;
}

.dialogForm_quantity {
    width: 60px;
}
</style>