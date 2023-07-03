<template>
           <div class="formback">
            <br>
            <span>GON Node</span>
            <input type="text" class="input" id="input4" readonly>
            <el-icon class="key-copy4" @click="copy4">
                <CopyDocument />
            </el-icon>
            <br><br>
            <span>Acert Subgraph</span>
            <input type="text" class="input" id="input5" readonly>
            <el-icon class="key-copy5" @click="copy5">
                <CopyDocument />
            </el-icon>
            <br><br>
            <span>Login Service</span>
            <input type="text" class="input" id="input6" readonly>
            <el-icon class="key-copy6" @click="copy6">
                <CopyDocument />
            </el-icon>
            <br><br>
            <span>Operator Service</span>
            <input type="text" class="input" id="input7" readonly>
            <el-icon class="key-copy7" @click="copy7">
                <CopyDocument />
            </el-icon>
        </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
function copy4() {
    navigator.clipboard.writeText(input4.value)
    ElMessage({
        message: 'Copy successfully!',
        type: 'success',
    })
}
function copy5() {
    navigator.clipboard.writeText(input5.value)
    ElMessage({
        message: 'Copy successfully!',
        type: 'success',
    })
}
function copy6() {
    navigator.clipboard.writeText(input6.value)
    ElMessage({
        message: 'Copy successfully!',
        type: 'success',
    })
}
function copy7() {
    navigator.clipboard.writeText(input7.value)
    ElMessage({
        message: 'Copy successfully!',
        type: 'success',
    })
}

import { ref, onMounted } from 'vue'
    
    const data = {
        project_info: {
            gon_node: "d82f7042-c9d7-4ec5-a372-61afbcec46d2",
            acert_subgraph: "cMv5AKUGyoWtZHw56gAXvzK9k7lA0Y0upVAop4wT",
            login_service: "s5RHklbbsnvGqm1hAwo07I6gnigVxQe5DPQGsdKt",
            operator_service:"s5RHklbbsnvGqm1hAwo07I6gnigVxQe5DPQGsdKt"
        }
    };

    onMounted(() => {
        input4.value = data.project_info.gon_node;
        input5.value = data.project_info.acert_subgraph;
        input6.value = data.project_info.login_service;
        input7.value = data.project_info.operator_service;
    })
</script>

<style>
.formback {
    border-radius: 25px;
    background-color: #FFFFFF;
    padding: 20px;
    margin: 20px;
}
.input{
    width: 400px;
    height: 30px;
    border-radius: 8px;
    border: unset;
    background-color: #F6F7F9;
    color: #86899D;
}
#input4{
    margin-left: 170px;
}
#input5{
    margin-left: 135px;
}
#input6{
    margin-left: 149px;
}
#input7{
    margin-left: 125px;
}
.key-copy4 {
    position: absolute;
    left: 911px;
    top: 195px;
    font-size: large;
    cursor: pointer;
}
.key-copy5 {
    position: absolute;
    left: 911px;
    top: 249px;
    font-size: large;
    cursor: pointer;
}
.key-copy6 {
    position: absolute;
    left: 911px;
    top: 303px;
    font-size: large;
    cursor: pointer;
}
.key-copy7 {
    position: absolute;
    left: 911px;
    top: 357px;
    font-size: large;
    cursor: pointer;
}


</style>