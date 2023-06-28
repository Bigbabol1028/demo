<template>
    <div class="first-box">
        <br>
        <span>Metaverse 名称</span>
        <input type="text" value="Monster Galaxy" class="input8 uninput" readonly>
        <br><br>
        <span>Metaverse 合约地址</span>
        <input type="text" value="0x7Db439e5862931c53eB3A788F07455373eCAF6EB" class="input9 input" readonly>
        <br><br>
        <span>测试环境</span>
        <input type="text" value="是" class="input10 uninput" readonly>
        <br><br>
        <span>Accounts</span>
        <input type="text" value="1,234" class="input11 uninput" readonly>
        <br><br>
    </div>
    <div class="second-box">
        <br>
        <span>World 名称</span>
        <input type="text" value="Moga" class="input12 uninput" readonly>
        <br><br>
        <span>World 合约地址</span>
        <input type="text" value="0x3eB3A788F0745535862931c5eCAF6EB737Db439e" class="input13 input" readonly>
        <br><br>
        <div class="hbox">
            <span>Assets</span>
            <div class="space"></div>
            <button class="second-btn">发行新资产</button>
        </div>
        <table border="1" cellspacing="0">
            <tr height="60px">
                <td width="135px" align="center">名称</td>
                <td width="540px" align="center">合约</td>
                <td width="150px" align="center">类型</td>
                <td width="240px" align="center">发行量</td>
                <td width="135px" align="center">Holders</td>
                <td width="145px" align="center">Transfers</td>
                <td width="300px" align="center">操作</td>
            </tr>
            <tr height="37px">
                <td align="center">GCOIN</td>
                <td align="center">0x7Db439e5862931c53eB3A788F07455373eCAF6EB</td>
                <td align="center">Asset20</td>
                <td align="center">1,234,567,890.1234</td>
                <td align="center">1200</td>
                <td align="center">26892</td>
                <td align="center"><span style="color:#02A7F0 ;">GONScan 增发</span></td>
            </tr>
            <tr height="37px">
                <td align="center">GGM</td>
                <td align="center">0x3eCAF6E75788F3e31c45B586299075373eB3ADb4</td>
                <td align="center">Asset20</td>
                <td align="center">987,654.1234</td>
                <td align="center">872</td>
                <td align="center">8974</td>
                <td align="center"><span style="color:#02A7F0 ;">GONScan 增发 查看锁仓</span></td>
            </tr>
            <tr height="37px">
                <td align="center">MOGA</td>
                <td align="center">0x788F075373eCAF6E753eB3ADb43e31c45B586299</td>
                <td align="center">Asset721</td>
                <td align="center">2,851</td>
                <td align="center">698</td>
                <td align="center">6544</td>
                <td align="center"><span style="color:#02A7F0 ;">GONScan 增发</span></td>
            </tr>
            <tr height="37px">
                <td align="center">Equip</td>
                <td align="center">0x53eB3A788F075373eCAF6E7Db439e5862931c45B</td>
                <td align="center">Asset721</td>
                <td align="center">1,234,567</td>
                <td align="center">1021</td>
                <td align="center">11245682</td>
                <td align="center"><span style="color:#02A7F0 ;">GONScan 增发</span></td>
            </tr>
        </table>
        <br>
    </div>
</template>
<style>
.first-box,.second-box{
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

.input8 {
    margin-left: 200px;
}

.input9 {
    margin-left: 165px;
}

.input10 {
    margin-left: 245px;
}

.input11 {
    margin-left: 240px;
}

.input12 {
    margin-left: 230px;
}

.input13 {
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
</style>
