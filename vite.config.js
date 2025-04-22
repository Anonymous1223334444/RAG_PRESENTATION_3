export default {
    server: {
      hmr: {
        overlay: false 
      }
    },
    build: {
      outDir: 'dist' 
    },
    features: {
      sync: true,
      autoScale: true
    }
  }