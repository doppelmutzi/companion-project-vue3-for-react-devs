<template>
  <div id="app-layout">
    <aside>
      <slot name="newsletter"></slot>
    </aside>
    <header>
      <slot name="headline"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>
<style lang="scss">
#app-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  height: 100%;
}

@media (max-width: 767px) {
  header {
    order: 2;
  }
}
</style>
