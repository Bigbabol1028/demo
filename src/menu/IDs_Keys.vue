<template>
    <div class="ids">
        <h2>Project Information</h2>
        <div class="formback">
            <span>Project Name</span>
            <br><br>
            <div class="input-box">
                <span>Project ID</span>
                <input type="text" id="input1" v-model="input1" readonly>
                <el-icon class="key-copy" @click="copy1">
                    <CopyDocument />
                </el-icon>
            </div>

            <div class="input-box">
                <span>Client Key</span>
                <input type="text" id="input2" v-model="input2" readonly>
                <el-icon class="key-copy" @click="copy2">
                    <CopyDocument />
                </el-icon>
            </div>
            <div class="input-box">
                <span>Server Key</span>
                <input type="text" id="input3" v-model="input3" readonly>
                <el-icon class="key-copy" @click="copy3">
                    <CopyDocument />
                </el-icon>
            </div>
            <a href="https://docs.particle.network/developers/auth-service/sdks" id="how-use" style="font-size: small;">How
                to use Client Key & Server Key?</a>
        </div>
        <br>
        <h2>Your Apps</h2>
        <div class="formback hbox">
            <div class="appbackleft">
                <h3>There are no apps in your project</h3>
                <br>
                Select a platform to get started
                <br><br>
            </div>
            <div class="space"></div>
            <div class="appbackright">
                <button class="creatApp" @click="creatAppformVisible = true">Web</button>
                <el-dialog v-model="creatAppformVisible" title="+Add Web App" draggable center>
                    <el-form :model="creatAppform" :label-position="labelPosition">
                        <el-form-item label="App name">
                            <el-input v-model="creatAppform.name" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="Domain">
                            <el-input v-model="creatAppform.domain" autocomplete="off" />
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button type="primary" @click="creatAppformVisible = false">
                                Save
                            </el-button>
                        </span>
                    </template>
                </el-dialog>
            </div>
        </div>
        <div class="formback">
            <p>Need help?</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
const creatAppformVisible = ref(false)
const labelPosition = ref('top')
const creatAppform = reactive({
    name: '',
    domain: '',
})

const data = {
    project_info: {
        project_id: "d82f7042-c9d7-4ec5-a372-61afbcec46d2",
        client_key: "cMv5AKUGyoWtZHw56gAXvzK9k7lA0Y0upVAop4wT",
        server_key: "s5RHklbbsnvGqm1hAwo07I6gnigVxQe5DPQGsdKt",
    }
};

let input1 = ref("")
let input2 = ref("")
let input3 = ref("")
input1.value = data.project_info.project_id
input2.value = data.project_info.client_key
input3.value = data.project_info.server_key

import { ElMessage } from 'element-plus'
function copy1() {
    navigator.clipboard.writeText(input1.value)
    ElMessage({
        message: 'Copy successfully!',
        type: 'success',
    })
}
function copy2() {
    navigator.clipboard.writeText(input2.value)
    ElMessage({
        message: 'Copy successfully!',
        type: 'success',
    })
}
function copy3() {
    navigator.clipboard.writeText(input3.value)
    ElMessage({
        message: 'Copy successfully!',
        type: 'success',
    })
}



/*onMounted(() => {
    input1.value = data.project_info.project_id;
    input2.value = data.project_info.client_key;
    input3.value = data.project_info.server_key;
})*/

</script>

<style>
.formback {
    border-radius: 25px;
    background-color: #FFFFFF;
    padding: 20px;
    margin: 20px;
}

#input1 {
    margin-left: 200px;
    width: 400px;
    height: 30px;
    border-radius: 8px;
    border: unset;
    background-color: #F6F7F9;
    color: #86899D;
}

#input2 {
    margin-left: 197px;
    width: 400px;
    height: 30px;
    border-radius: 8px;
    border: unset;
    background-color: #F6F7F9;
    color: #86899D;
}

#input3 {
    margin-left: 193px;
    width: 400px;
    height: 30px;
    border-radius: 8px;
    border: unset;
    background-color: #F6F7F9;
    color: #86899D;
}

.inputimg {
    height: 18.92px;
    width: 14px;
    margin-top: 4px;
    margin-bottom: -3px;
}

#how-use {
    color: #5177F9;
}

.input-box {
    position: relative;
    margin-bottom: 20px;
}

.key-copy {
    position: absolute;
    left: 652px;
    top: 7px;
    font-size: large;
    cursor: pointer;
}

.creatApp {
    margin-top: 30px;
    margin-right: 50px;
    width: 130px;
    height: 70px;
    border-radius: 10px;
    font-size: 20px;
    box-shadow: 5px 5px 0px 0px gray;
}
</style>