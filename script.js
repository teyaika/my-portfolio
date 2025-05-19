// JavaScriptでの動きが必要ならここに追加
<script>
  window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    setTimeout(() => loader.style.display = "none", 500);
  });
</script>
