<template>
    <div class="first-box">
        <br>
        <span>Metaverse 名称</span>
        <input type="text" value="Monster Galaxy" class="uninput" id="input8" readonly>
        <br><br>
        <span>Metaverse 合约地址</span>
        <input type="text" class="input" id="input9" readonly>
        <el-icon class="key-copy9" @click="copy9">
                <CopyDocument />
            </el-icon>
        <br><br>
        <span>测试环境</span>
        <input type="text" value="是" class="uninput" id="input10" readonly>
        <br><br>
        <span>Accounts</span>
        <input type="text" value="1,234" class="uninput" id="input11" readonly>
        <br><br>
    </div>
    <div class="second-box">
        <br>
        <span>World 名称</span>
        <input type="text" value="Moga" class="uninput" id="input12" readonly>
        <br><br>
        <span>World 合约地址</span>
        <input type="text" class="input" id="input13" readonly>
        <el-icon class="key-copy13" @click="copy13">
                <CopyDocument />
            </el-icon>
        <br><br>
        <div class="hbox">
            <span>Assets</span>
            <div class="space"></div>
            <button class="second-btn">发行新资产</button>
        </div>
        <el-table :data="tableData3" border style="width: 100%">
            <el-table-column prop="name" label="名称" width="120px"/>
            <el-table-column prop="contract" label="合约" width="503px"/>
            <el-table-column prop="type" label="类型" width="149px"/>
            <el-table-column prop="circulation" label="发行量" width="210px"/>
            <el-table-column prop="holder" label="Holder" width="120px"/>
            <el-table-column prop="transfers" label="Transfers" width="110px"/>
            <el-table-column prop="operate" label="操作" width="196px"/>
        </el-table>
        <br>
    </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
function copy9() {
    navigator.clipboard.writeText(input9.value)
    ElMessage({
        message: 'Copy successfully!',
        type: 'success',
    })
}
function copy13() {
    navigator.clipboard.writeText(input13.value)
    ElMessage({
        message: 'Copy successfully!',
        type: 'success',
    })
}
import { ref, onMounted } from 'vue'
    
    const data = {
        project_info: {
            metaverse_contract: "0x7Db439e5862931c53eB3A788F07455373eCAF6EB",
            world_contract: "0x3eB3A788F0745535862931c5eCAF6EB737Db439e",
        }
    };

    onMounted(() => {
        input9.value = data.project_info.metaverse_contract;
        input13.value = data.project_info.world_contract;
    })
/*const data = {
    metaverse:{
        name: "",
        contract: ""
    },
    world:{},
    tableData3 : [
    {
        name: 'GCOIN',
        contract: '0x7Db439e5862931c53eB3A788F07455373eCAF6EB',
        type: 'Asset20',
        circulation: '1,234,567,890.1234',
        holder: '1200',
        transfers: '26892',
        operate: 'GONScan 增发'
    },
    {
        name: 'GGM',
        contract: '0x3eCAF6E75788F3e31c45B586299075373eB3ADb4',
        type: 'Asset20',
        circulation: '987,654.1234',
        holder: '872',
        transfers: '8974',
        operate: 'GONScan 增发 查看锁仓'
    },
    {
        name: 'MOGA',
        contract: '0x788F075373eCAF6E753eB3ADb43e31c45B586299',
        type: 'Asset721',
        circulation: '2,851',
        holder: '698',
        transfers: '6544',
        operate: 'GONScan 增发'
    },
    {
        name: 'Equip',
        contract: '0x53eB3A788F075373eCAF6E7Db439e5862931c45B',
        type: 'Asset721',
        circulation: '1,234,567',
        holder: '1021',
        transfers: '11245682',
        operate: 'GONScan 增发'
    }
    ]
} */
const tableData3 = [
    {
        name: 'GCOIN',
        contract: '0x7Db439e5862931c53eB3A788F07455373eCAF6EB',
        type: 'Asset20',
        circulation: '1,234,567,890.1234',
        holder: '1200',
        transfers: '26892',
        operate: 'GONScan 增发'
    },
    {
        name: 'GGM',
        contract: '0x3eCAF6E75788F3e31c45B586299075373eB3ADb4',
        type: 'Asset20',
        circulation: '987,654.1234',
        holder: '872',
        transfers: '8974',
        operate: 'GONScan 增发 查看锁仓'
    },
    {
        name: 'MOGA',
        contract: '0x788F075373eCAF6E753eB3ADb43e31c45B586299',
        type: 'Asset721',
        circulation: '2,851',
        holder: '698',
        transfers: '6544',
        operate: 'GONScan 增发'
    },
    {
        name: 'Equip',
        contract: '0x53eB3A788F075373eCAF6E7Db439e5862931c45B',
        type: 'Asset721',
        circulation: '1,234,567',
        holder: '1021',
        transfers: '11245682',
        operate: 'GONScan 增发'
    }
]
</script>

<style>
.first-box,
.second-box {
    border-radius: 25px;
    background-color: #FFFFFF;
    padding: 20px;
    margin: 20px;
}

.input {
    width: 400px;
    height: 30px;
    border-radius: 8px;
    border: unset;
    background-color: #F6F7F9;
    color: #86899D;
}

.uninput {
    border: unset;
}

#input8 {
    margin-left: 200px;
}

#input9 {
    margin-left: 165px;
}

#input10 {
    margin-left: 245px;
}

#input11 {
    margin-left: 240px;
}

#input12 {
    margin-left: 230px;
}

#input13 {
    margin-left: 198px;
}

.second-btn {
    margin-right: 570px;
    margin-bottom: 20px;
    height: 28px;
    width: 104px;
    color: #FFFFFF;
    background-color: #169BD5;
}
.key-copy9 {
    position: absolute;
    left: 970px;
    top: 239px;
    font-size: large;
    cursor: pointer;
}
.key-copy13 {
    position: absolute;
    left: 970px;
    top: 507px;
    font-size: large;
    cursor: pointer;
}
</style>
