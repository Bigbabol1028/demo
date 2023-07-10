<template>
    <div>
        <div class="tabname hbox">
            <h1>管理员账户</h1>
            <div class="space"></div>
            <button @click="test">测试</button>
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
                        <el-button type="primary" @click="onAddAccount">
                            Confirm
                        </el-button>
                    </span>
                </template>
            </el-drawer>
            <el-drawer v-model="reviseRow" title="修改">
                <el-form :model="reviseForm" :label-position="labelPosition">
                    <el-form-item label="合约">
                        <el-input v-model="reviseForm.contract" autocomplete="off" class="reviseForm_contract" />
                    </el-form-item>
                </el-form>
                <template #footer>
                    <div style="flex: auto">
                        <el-button @click="reviseRow = false">cancel</el-button>
                        <el-button type="primary" @click="reviseRow = false">confirm</el-button>
                    </div>onReviseRow
                </template>
            </el-drawer>
        </div>
        <div class="tabback">
            <el-table :data="tableData1" border style="width:max-content" empyt-text="-h">
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
                <el-table-column label="操作" width="154px">
                    <el-button class="btn_reviseRow" @click="reviseRow = true">修改</el-button>
                </el-table-column>

            </el-table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
const drawerFormVisible = ref(false)
const labelPosition = ref('top')
const reviseRow = ref(false)
const drawerForm = reactive({
    number: '',
    name: '',
    address: '',
    state_text: '',
    account: '',
    quantity: ''
})
const reviseForm = reactive({
    contract: '',
    permissions: '',
    address: '',
    settime: '',
})

const data1 = [
    {
        //number: '1',
        name: '[项目管理员账户]',
        address: '0x22704345C8649CA4b9f970c616cE7fb5fB1Fdab9',
        state: true,
        account: '234567@abc.com',
        quantity: '12'
    },
    {
        //number: '2',
        name: 'abc',
        address: '0xdFb630379ccB11114c31D9e618eB6D1275eDDBCf',
        state: true,
        account: '234567@abc.com',
        quantity: '0'
    },
    {
        //number: '3',
        name: '',
        address: '0x40C7214f2d1312A492DBBc77Bb1D851431ad1678',
        state: false,
        quantity: '2'
    }
]
const data2 = [
    {
        contract_type: 'Metaverse',
        contract: '0x22704345C8649CA4b9f970c616cE7fb5fB1Fdab9',
        permissions: 'owner',
        //name: '项目管理员账户',
        address: '0x22704345C8649CA4b9f970c616cE7fb5fB1Fdab9',
        settime: 1688895483240,
        //operate: '修改',
    },
    {
        contract_type: 'World',
        contract: '0x40C7214f2d1312A492DBBc77Bb1D851431ad1678',
        permissions: 'admin',
        //name: 'abc',
        address: '0xdFb630379ccB11114c31D9e618eB6D1275eDDBCf',
        settime: Date.now() - 61 * 1000,
        //operate: '修改',
    },
    {
        contract_type: 'Asset',
        contract: '0xe7A552BeA186f0C4B4718648FAFEAf8d6C85cD5E',
        permissions: 'owner',
        //name: '项目管理员账户',
        address: '0x40C7214f2d1312A492DBBc77Bb1D851431ad1678',
        settime: Date.now(),
        //operate: '修改',
    }
]

function getStateText(_state: any): string {
    let txt = '';
    if (_state)
        return '已验证';
    else
        return '未验证';
}
//为table1添加一行
function addAccount(_name: any, _address: any, _state: any, _account: any, _quantity: any) {
    tableData1.value.push(
        {
            number: tableData1.value.length + 1,
            name: _name,
            address: _address,
            state_text: getStateText(_state),
            account: _account,
            quantity: _quantity
        }
    );
}

function onAddAccount() {
    addAccount(drawerForm.name, drawerForm.address, drawerForm.state_text, drawerForm.account, drawerForm.quantity);
    drawerFormVisible.value = false;
}



const tableData1: any = ref([]);//

for (let i = 0; i < data1.length; i++) {
    addAccount(data1[i].name, data1[i].address, data1[i].state, data1[i].account, data1[i].quantity);
}
const tableData2: any = ref([]);
//添加table2的内容
for (let i = 0; i < data2.length; i++) {
    tableData2.value.push(
        {
            contract: data2[i].contract_type + " " + data2[i].contract,
            permissions: data2[i].permissions,
            address: data2[i].name + " " + data2[i].address,
            settime: getTimeText(data2[i].settime),
        }
    );

}
//计算时间差
function getTimeText(time: number): string {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const now = new Date().getTime();
    const newTime = now - time
    const _min = Math.floor(newTime / minute);
    const _hour = Math.floor(newTime / hour);
    const _day = Math.floor(newTime / day);

    if(_day >= 1){
        return _day + '天前';
    } else if(_hour >= 1 ){
        return _hour + '小时前';
    } else if(_min >= 1 ){
        return _min + '分钟前';
    }else {
        return '刚刚';
    }
}
//获取账户名称
function getAccountName(){
  
}

//测试按钮
function test() {
    for (let i = 0; i < data2.length; i++) {
        alert(getTimeText(data2[i].settime))
    }
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

.btn_reviseRow {
    border: unset;
    text-decoration: underline;
    color: #169BD5;
    cursor: pointer;
}
</style>