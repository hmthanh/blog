                        importScripts("/blog/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/blog/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/blog/2014/07/08/understand-convolution.html","revision":"eca8954232a9edab1efcd67313478fcf"},{"url":"/blog/2018/06/24/attention-attention.html","revision":"abd13ce1164cd95c8e6dd5ebb6779556"},{"url":"/blog/2020/04/07/the-transformer-family.html","revision":"01fc2d12ce6b662e745c5e0d48e21520"},{"url":"/blog/404.html","revision":"679337294e57e83b2b766b31eeca0f21"},{"url":"/blog/about/index.html","revision":"8abe8acfcd4ab65834765a328c85c6b7"},{"url":"/blog/archive.html","revision":"d90742ce1f9f6b7c9845679b30fe0f83"},{"url":"/blog/assets/main.css","revision":"2691db35e94b9099dd7a0799249deba1"},{"url":"/blog/assets/minima-social-icons.svg","revision":"a9b49f69fbdfeb74b9fb131e9ca6d105"},{"url":"/blog/deep-learning/2019/04/25/ConvNets-Modular.html","revision":"de2c9c7e9fd363f2685d42b1a41941c0"},{"url":"/blog/deep-learning/2019/04/25/recipe-for-training-neural-network.html","revision":"2fd7948c0d0f8bc286e7a4e47ec6ea6c"},{"url":"/blog/docs/2014/07/08/understand-convolution.html","revision":"06052ccde886863a727daa8bf195c059"},{"url":"/blog/docs/2018/06/24/attention-attention.html","revision":"0819ea02b960377af4546252be5cfda1"},{"url":"/blog/docs/2020/04/07/the-transformer-family.html","revision":"f30bae8e79c357603cf30e43a6c2dc39"},{"url":"/blog/docs/404.html","revision":"ec57206456009bf9d274284d96b928a5"},{"url":"/blog/docs/about/index.html","revision":"c45c102a1aed0b0b92977d61a06345c4"},{"url":"/blog/docs/archive.html","revision":"d90742ce1f9f6b7c9845679b30fe0f83"},{"url":"/blog/docs/assets/main.css","revision":"2691db35e94b9099dd7a0799249deba1"},{"url":"/blog/docs/assets/minima-social-icons.svg","revision":"a9b49f69fbdfeb74b9fb131e9ca6d105"},{"url":"/blog/docs/deep-learning/2019/04/25/ConvNets-Modular.html","revision":"52028ae8cbd06016fbff1c705f48657b"},{"url":"/blog/docs/deep-learning/2019/04/25/recipe-for-training-neural-network.html","revision":"30623a29318099a7ff901d78f59091dc"},{"url":"/blog/docs/deep-learning/2020/11/01/recipe-for-training-neural-network.html","revision":"ee2a437b8e9b0e02d940c7db325b97c2"},{"url":"/blog/docs/docs/2014/07/08/understand-convolution.html","revision":"06052ccde886863a727daa8bf195c059"},{"url":"/blog/docs/docs/2018/06/24/attention-attention.html","revision":"d414d7bc336257dd7c796c7a09c8e4a9"},{"url":"/blog/docs/docs/2020/04/07/the-transformer-family.html","revision":"3ace8688a58f591c89b48d50a6fc196a"},{"url":"/blog/docs/docs/404.html","revision":"ec57206456009bf9d274284d96b928a5"},{"url":"/blog/docs/docs/about/index.html","revision":"a4903e58fb8c23002ca8f3d066dfba41"},{"url":"/blog/docs/docs/archive.html","revision":"d90742ce1f9f6b7c9845679b30fe0f83"},{"url":"/blog/docs/docs/assets/main.css","revision":"2691db35e94b9099dd7a0799249deba1"},{"url":"/blog/docs/docs/assets/minima-social-icons.svg","revision":"a9b49f69fbdfeb74b9fb131e9ca6d105"},{"url":"/blog/docs/docs/deep-learning/2020/11/01/recipe-for-training-neural-network.html","revision":"ee2a437b8e9b0e02d940c7db325b97c2"},{"url":"/blog/docs/docs/index.html","revision":"3188da6bff622658d89996fc2929c37a"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-background-sync.dev.js","revision":"9aea71255fb0f298098812aa11db65b2"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-background-sync.prod.js","revision":"eeaa9c051d9e99a3c5c88b41228c8d74"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-broadcast-cache-update.dev.js","revision":"7acc14de3f5d9f507623f224591ab5b1"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-broadcast-cache-update.prod.js","revision":"a458ad9c8b901966b4d59ce3b4f5a869"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-cache-expiration.dev.js","revision":"7bd916bedfe4c6328761b0fc58f3507b"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-cache-expiration.prod.js","revision":"af8f9fdbc8cae90f380c9bac6f7f78df"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-cacheable-response.dev.js","revision":"195010b28149d1d8ceb4b7b7fd2084e1"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-cacheable-response.prod.js","revision":"f1405e389d94a436707877491034e935"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-core.dev.js","revision":"fe14f58bdd553537c71a1c0c48b23b43"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-core.prod.js","revision":"52d19b122c5b0914811bade1f76a3faa"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-google-analytics.dev.js","revision":"8235344cb0caddf7ddbf05e64a8f26b4"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-google-analytics.prod.js","revision":"cd66b64748b4437ac643840a76db18f6"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-navigation-preload.dev.js","revision":"26cff10167061cbac9fb52b1cce5e16f"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-navigation-preload.prod.js","revision":"71b459464250cd4997deede4cc13f5cc"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-precaching.dev.js","revision":"567166969a683137db14508f116c205a"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-precaching.prod.js","revision":"f2f0c2810fea85a46c0cb28ff78a9159"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-range-requests.dev.js","revision":"8a8f4a1cd7d38748256282c4e7d57172"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-range-requests.prod.js","revision":"0b2f458c203b920658c7a2d651682355"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-routing.dev.js","revision":"81d794cb695830612f95b9124b79a293"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-routing.prod.js","revision":"3a26532a0a1c4b5245575cce26ba87dc"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-strategies.dev.js","revision":"6579284dddfffea4982c49ab86c759ce"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-strategies.prod.js","revision":"ab888eaebd74c39206b73ace248c343e"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-streams.dev.js","revision":"02254027b2737cef8a4b98071c2eb2f0"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-streams.prod.js","revision":"02a6ea213a32d95e931003eb280a2dbf"},{"url":"/blog/docs/docs/js/workbox-v3.6.3/workbox-sw.js","revision":"cde784bf7f3ea826506b80c778226e75"},{"url":"/blog/docs/docs/log.html","revision":"7e1acd74b5b27039b239d6644ec15db9"},{"url":"/blog/docs/docs/python/2020/11/01/python-is-cool.html","revision":"252533018ff8ee9906e579113d8eda03"},{"url":"/blog/docs/docs/service-worker.js","revision":"390814cad251d4ed4324c7914c386f19"},{"url":"/blog/docs/docs/serviceworker.js","revision":"6add9686842cc617d5de7411bb8f838c"},{"url":"/blog/docs/docs/sw-register.js","revision":"28a5ee7c99fb4f7452a63f646ff3e22b"},{"url":"/blog/docs/docs/tag/attention.html","revision":"8f62421e33d0365b2c052f988362f5e6"},{"url":"/blog/docs/docs/tag/auto-ML.html","revision":"9b6868394ca81c619c23b6808b4d671c"},{"url":"/blog/docs/docs/tag/autoencoder.html","revision":"3448c8a18b700c89d12cf7d5e14abe84"},{"url":"/blog/docs/docs/tag/evolution.html","revision":"e1d0b0b8afcc9b9560bd51582fb39a1a"},{"url":"/blog/docs/docs/tag/exploration.html","revision":"903959f1a1adf8fd2bdad61fbca19ff2"},{"url":"/blog/docs/docs/tag/foundation.html","revision":"6f24d4f17875cf07702a2c222d94afc7"},{"url":"/blog/docs/docs/tag/gan.html","revision":"6da35a934c1aded54bc7d96208e2150c"},{"url":"/blog/docs/docs/tag/generative-model.html","revision":"3cffd23fecdfe9ef7213a968d6b15c31"},{"url":"/blog/docs/docs/tag/information-theory.html","revision":"bbe60e9291b696919ca91fe0c3fafb7e"},{"url":"/blog/docs/docs/tag/long-read.html","revision":"1cd3d2d697448d73a5bc259e3f2b17af"},{"url":"/blog/docs/docs/tag/meta-learning.html","revision":"73425b3abf4c1ca5709c940dcfb00291"},{"url":"/blog/docs/docs/tag/nlp.html","revision":"6bb1ab5d63030ed8c8ca2dbb7bc6d46c"},{"url":"/blog/docs/docs/tag/object-detection.html","revision":"9616f3e4a90dcf2a899cb95946e2abb0"},{"url":"/blog/docs/docs/tag/object-recognition.html","revision":"47318d76be9b803b2079c76e003bf39a"},{"url":"/blog/docs/docs/tag/reinforcement-learning.html","revision":"da01d5a2c4e0001382c3de4d9a6a68d2"},{"url":"/blog/docs/docs/tag/representation-learning.html","revision":"509583ab8faf9fbd6466f9d4ccbe26b6"},{"url":"/blog/docs/docs/tag/rnn.html","revision":"45462acfc0bcab76964c856d03e0da0b"},{"url":"/blog/docs/docs/tag/tensorflow.html","revision":"d41d8cd98f00b204e9800998ecf8427e"},{"url":"/blog/docs/docs/tags.html","revision":"c8250469b815140f4d80160e34024443"},{"url":"/blog/docs/index.html","revision":"1fcb019b90be0fee18af0472c1e4fd8a"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-background-sync.dev.js","revision":"9aea71255fb0f298098812aa11db65b2"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-background-sync.prod.js","revision":"eeaa9c051d9e99a3c5c88b41228c8d74"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-broadcast-cache-update.dev.js","revision":"7acc14de3f5d9f507623f224591ab5b1"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-broadcast-cache-update.prod.js","revision":"a458ad9c8b901966b4d59ce3b4f5a869"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-cache-expiration.dev.js","revision":"7bd916bedfe4c6328761b0fc58f3507b"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-cache-expiration.prod.js","revision":"af8f9fdbc8cae90f380c9bac6f7f78df"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-cacheable-response.dev.js","revision":"195010b28149d1d8ceb4b7b7fd2084e1"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-cacheable-response.prod.js","revision":"f1405e389d94a436707877491034e935"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-core.dev.js","revision":"fe14f58bdd553537c71a1c0c48b23b43"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-core.prod.js","revision":"52d19b122c5b0914811bade1f76a3faa"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-google-analytics.dev.js","revision":"8235344cb0caddf7ddbf05e64a8f26b4"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-google-analytics.prod.js","revision":"cd66b64748b4437ac643840a76db18f6"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-navigation-preload.dev.js","revision":"26cff10167061cbac9fb52b1cce5e16f"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-navigation-preload.prod.js","revision":"71b459464250cd4997deede4cc13f5cc"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-precaching.dev.js","revision":"567166969a683137db14508f116c205a"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-precaching.prod.js","revision":"f2f0c2810fea85a46c0cb28ff78a9159"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-range-requests.dev.js","revision":"8a8f4a1cd7d38748256282c4e7d57172"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-range-requests.prod.js","revision":"0b2f458c203b920658c7a2d651682355"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-routing.dev.js","revision":"81d794cb695830612f95b9124b79a293"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-routing.prod.js","revision":"3a26532a0a1c4b5245575cce26ba87dc"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-strategies.dev.js","revision":"6579284dddfffea4982c49ab86c759ce"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-strategies.prod.js","revision":"ab888eaebd74c39206b73ace248c343e"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-streams.dev.js","revision":"02254027b2737cef8a4b98071c2eb2f0"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-streams.prod.js","revision":"02a6ea213a32d95e931003eb280a2dbf"},{"url":"/blog/docs/js/workbox-v3.6.3/workbox-sw.js","revision":"cde784bf7f3ea826506b80c778226e75"},{"url":"/blog/docs/log.html","revision":"7e1acd74b5b27039b239d6644ec15db9"},{"url":"/blog/docs/python/2019/12/27/python-is-cool.html","revision":"b76d16d890ed7e812defd75c1779c0ce"},{"url":"/blog/docs/python/2020/11/01/python-is-cool.html","revision":"252533018ff8ee9906e579113d8eda03"},{"url":"/blog/docs/service-worker.js","revision":"390814cad251d4ed4324c7914c386f19"},{"url":"/blog/docs/serviceworker.js","revision":"6add9686842cc617d5de7411bb8f838c"},{"url":"/blog/docs/sw-register.js","revision":"28a5ee7c99fb4f7452a63f646ff3e22b"},{"url":"/blog/docs/tag/attention.html","revision":"8f62421e33d0365b2c052f988362f5e6"},{"url":"/blog/docs/tag/auto-ML.html","revision":"9b6868394ca81c619c23b6808b4d671c"},{"url":"/blog/docs/tag/autoencoder.html","revision":"3448c8a18b700c89d12cf7d5e14abe84"},{"url":"/blog/docs/tag/evolution.html","revision":"e1d0b0b8afcc9b9560bd51582fb39a1a"},{"url":"/blog/docs/tag/exploration.html","revision":"903959f1a1adf8fd2bdad61fbca19ff2"},{"url":"/blog/docs/tag/foundation.html","revision":"6f24d4f17875cf07702a2c222d94afc7"},{"url":"/blog/docs/tag/gan.html","revision":"6da35a934c1aded54bc7d96208e2150c"},{"url":"/blog/docs/tag/generative-model.html","revision":"3cffd23fecdfe9ef7213a968d6b15c31"},{"url":"/blog/docs/tag/information-theory.html","revision":"bbe60e9291b696919ca91fe0c3fafb7e"},{"url":"/blog/docs/tag/long-read.html","revision":"1cd3d2d697448d73a5bc259e3f2b17af"},{"url":"/blog/docs/tag/meta-learning.html","revision":"73425b3abf4c1ca5709c940dcfb00291"},{"url":"/blog/docs/tag/nlp.html","revision":"6bb1ab5d63030ed8c8ca2dbb7bc6d46c"},{"url":"/blog/docs/tag/object-detection.html","revision":"9616f3e4a90dcf2a899cb95946e2abb0"},{"url":"/blog/docs/tag/object-recognition.html","revision":"47318d76be9b803b2079c76e003bf39a"},{"url":"/blog/docs/tag/reinforcement-learning.html","revision":"da01d5a2c4e0001382c3de4d9a6a68d2"},{"url":"/blog/docs/tag/representation-learning.html","revision":"509583ab8faf9fbd6466f9d4ccbe26b6"},{"url":"/blog/docs/tag/rnn.html","revision":"45462acfc0bcab76964c856d03e0da0b"},{"url":"/blog/docs/tag/tensorflow.html","revision":"64aecfdc74636270daac0a6d7ee73a84"},{"url":"/blog/docs/tag/transformer.html","revision":"ec86a1875738e18a839014ce358fe397"},{"url":"/blog/docs/tag/tutorial.html","revision":"4c99879d40220ae2dc06ab1a8e6af5cf"},{"url":"/blog/docs/tags.html","revision":"c8250469b815140f4d80160e34024443"},{"url":"/blog/docs/tutorial/2020/11/01/simple-vim-tutorial.html","revision":"224c18fb19ab56b1341f08ea6611c3d7"},{"url":"/blog/index.html","revision":"95313d00ee2d5eae5a4c6cfa53d407b0"},{"url":"/blog/log.html","revision":"7e1acd74b5b27039b239d6644ec15db9"},{"url":"/blog/python/2019/12/27/python-is-cool.html","revision":"45ed8b2c17b1a26e3bcd3d3fc93daccf"},{"url":"/blog/service-worker.js","revision":"03d6cbfc8d380825b7f5c16530fd66a9"},{"url":"/blog/serviceworker.js","revision":"6add9686842cc617d5de7411bb8f838c"},{"url":"/blog/softskill/2020/11/03/How-to-thinking.html","revision":"8d2b6e4731651a0107058f5dc179d8cb"},{"url":"/blog/sw-register.js","revision":"87ddf1f1ec59e47e48e2ce207c08946f"},{"url":"/blog/tag/attention.html","revision":"8f62421e33d0365b2c052f988362f5e6"},{"url":"/blog/tag/auto-ML.html","revision":"9b6868394ca81c619c23b6808b4d671c"},{"url":"/blog/tag/autoencoder.html","revision":"3448c8a18b700c89d12cf7d5e14abe84"},{"url":"/blog/tag/evolution.html","revision":"e1d0b0b8afcc9b9560bd51582fb39a1a"},{"url":"/blog/tag/exploration.html","revision":"903959f1a1adf8fd2bdad61fbca19ff2"},{"url":"/blog/tag/foundation.html","revision":"6f24d4f17875cf07702a2c222d94afc7"},{"url":"/blog/tag/gan.html","revision":"6da35a934c1aded54bc7d96208e2150c"},{"url":"/blog/tag/generative-model.html","revision":"3cffd23fecdfe9ef7213a968d6b15c31"},{"url":"/blog/tag/information-theory.html","revision":"bbe60e9291b696919ca91fe0c3fafb7e"},{"url":"/blog/tag/long-read.html","revision":"1cd3d2d697448d73a5bc259e3f2b17af"},{"url":"/blog/tag/meta-learning.html","revision":"73425b3abf4c1ca5709c940dcfb00291"},{"url":"/blog/tag/nlp.html","revision":"6bb1ab5d63030ed8c8ca2dbb7bc6d46c"},{"url":"/blog/tag/object-detection.html","revision":"9616f3e4a90dcf2a899cb95946e2abb0"},{"url":"/blog/tag/object-recognition.html","revision":"47318d76be9b803b2079c76e003bf39a"},{"url":"/blog/tag/reinforcement-learning.html","revision":"da01d5a2c4e0001382c3de4d9a6a68d2"},{"url":"/blog/tag/representation-learning.html","revision":"509583ab8faf9fbd6466f9d4ccbe26b6"},{"url":"/blog/tag/rnn.html","revision":"45462acfc0bcab76964c856d03e0da0b"},{"url":"/blog/tag/tensorflow.html","revision":"64aecfdc74636270daac0a6d7ee73a84"},{"url":"/blog/tag/transformer.html","revision":"ec86a1875738e18a839014ce358fe397"},{"url":"/blog/tag/tutorial.html","revision":"4c99879d40220ae2dc06ab1a8e6af5cf"},{"url":"/blog/tags.html","revision":"959db1e66d2a55994fd1d23667c0c9fa"},{"url":"/blog/tutorial/2020/11/01/simple-vim-tutorial.html","revision":"4223b777833051e1ca001e4f2473ce00"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'blog',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);