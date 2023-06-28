<template>
  <div class="aside-box vbox">
    <div class="selector"></div>
    <el-menu class="asidemenu" mode="vertical">
      <h3>Manage</h3>
      <router-link to="/Admin_Owner"><el-menu-item index="Admin_Owner">Admin & Owner</el-menu-item></router-link>
      <router-link to="/IDs_Keys"><el-menu-item index="IDs_Keys">IDs & Keys</el-menu-item></router-link>
      <router-link to="/Services"><el-menu-item index="Services">Services</el-menu-item></router-link>
      <router-link to="/Stats"><el-menu-item index="Stats">Stats</el-menu-item></router-link>
      <h3>Metaverse</h3>
      <router-link to="/Metaverse"><el-menu-item index="Metaverse">Metaverse</el-menu-item></router-link>
      <router-link to="/Account"><el-menu-item index="Account">Account</el-menu-item></router-link>
      <router-link to="/Activity"><el-menu-item index="Activity">Activity</el-menu-item></router-link>
      <h3>Auth & CloudWallet</h3>
      <router-link to="/Branding"><el-menu-item index="Branding">Branding</el-menu-item></router-link>
      <router-link to="/Settings"><el-menu-item index="Settings">Settings</el-menu-item></router-link>
    </el-menu>
  </div>
</template>

<style>
.aside-box {
  width: 240px;
}

.selector {
  height: 80px;
}

.asidemenu {
  flex: 1;
  margin-left: 30px;
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
</style>