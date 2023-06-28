<template>
    <div>
        <div class="tabname hbox">
            <h1>管理员账户</h1>
            <div class="space"></div>
            <button class="tabnamebtn1">添加</button>
        </div>
        <div class="tabback">
            <table class="admin-tab" border="1" cellspacing="0">
                <tr height="60px">
                    <td width="60px" align="center">序号</td>
                    <td width="200px" align="center">名称</td>
                    <td width="420px" align="center">地址</td>
                    <td width="120px" align="center">验证状态</td>
                    <td width="260px" align="center">云钱包账号</td>
                    <td width="140px" align="center">已应用的权限数量</td>
                </tr>
                <tr height="37px">
                    <td align="center">1</td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                </tr>
                <tr height="37px">
                    <td align="center">2</td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                </tr>
                <tr height="37px">
                    <td align="center">3</td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                </tr>
            </table>
        </div>
        <br>
        <h1>合约权限</h1>
        <div class="tabback">
            <table class="admin-tab" border="1" cellspacing="0">
                <tr height="60px">
                    <td width="470px" align="center">合约</td>
                    <td width="140px" align="center">权限</td>
                    <td width="260px" align="center">权限地址</td>
                    <td width="190px" align="center">设置时间</td>
                    <td width="140px" align="center">操作</td>
                </tr>
                <tr height="37px">
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                </tr>
                <tr height="37px">
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                </tr>
                <tr height="37px">
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                </tr>
            </table>
        </div>
    </div>
</template>


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