
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
<<<<<<< HEAD
    "buildId": "ae26960b-07ba-4ef6-8b33-0d9b3e450282"
=======
    "buildId": "dev"
>>>>>>> 14f9a595fc5e668f601f5654aca08583d388a8e8
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /*@__PURE__*/ defuFn(inlineConfig)
