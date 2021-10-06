<!-- https://heroicons.com/ -->
<script lang="ts">
  let customClass: string = "";
  export { customClass as class };

  export let height: string|number = 24
  export let width: string|number = 24
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class={customClass}
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  {height}
  {width}
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
  />
</svg>
