<template>
  <div class="aside-box vbox">
    <div class="selector"></div>
    <el-menu class="asidemenu" mode="vertical" :router="true">
      <h3>Manage</h3>
      <el-menu-item index="Admin_Owner">Admin & Owner</el-menu-item>
      <el-menu-item index="IDs_Keys">IDs & Keys</el-menu-item>
      <el-menu-item index="Services">Services</el-menu-item>
      <el-menu-item index="Stats">Stats</el-menu-item>
      <h3>Metaverse</h3>
      <el-menu-item index="Metaverse">Metaverse</el-menu-item>
      <el-menu-item index="Account">Account</el-menu-item>
      <el-menu-item index="Activity">Activity</el-menu-item>
      <h3>Auth & CloudWallet</h3>
      <el-menu-item index="Branding">Branding</el-menu-item>
      <el-menu-item index="Settings">Settings</el-menu-item>
    </el-menu>
  </div>
</template>

<style>
.aside-box {
  width: 210px;
  margin-left: 30px;
}

.selector {
  height: 80px;
}

.asidemenu {
  flex: 1;
  margin-left: 0px;
}

.asidemenu {
  background-color: #F6F7F9;
}

.el-menu-item{
  text-decoration: none;
  
}

.router-link-active {
  text-decoration: none;
}

.is-active{
  background-color:#e9ecf1;
  border-top-right-radius: 80px ;
  border-bottom-right-radius: 80px;
}
</style>