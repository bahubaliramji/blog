<template>
  <router-link to="/">Home</router-link><br/>
  <router-link to="/login">Login</router-link><br/>
  <router-link to="/profile/amrendra">Profile Amrendra</router-link><br/>
  <router-link to="/profile/peter">Profile Peter</router-link><br/>
  <router-link to="/profile/sam">Profile Sam</router-link><br/>
  <router-link to="/404">404 Page</router-link><br/>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>
