                        importScripts("/blog/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/blog/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/blog/2018/06/24/attention-attention.html","revision":"0811395c57de681e68ed49c96839dac3"},{"url":"/blog/2020/04/07/the-transformer-family.html","revision":"763a8a0205fdf86881819562c825e79f"},{"url":"/blog/404.html","revision":"5c26b4636d590b5c57c6a53c5ba2088c"},{"url":"/blog/about/index.html","revision":"f7ba0fbd1656ccaaa4dbd6dae80daec0"},{"url":"/blog/archive.html","revision":"d90742ce1f9f6b7c9845679b30fe0f83"},{"url":"/blog/assets/main.css","revision":"01d929829bd40d0c157c221ab3590410"},{"url":"/blog/assets/minima-social-icons.svg","revision":"a9b49f69fbdfeb74b9fb131e9ca6d105"},{"url":"/blog/deep-learning/2020/11/01/recipe-for-training-neural-network.html","revision":"49a6e8a5129182c56a284046a9cb9fb9"},{"url":"/blog/index.html","revision":"cc759f6b02ae10b325b152597df53d86"},{"url":"/blog/log.html","revision":"7e1acd74b5b27039b239d6644ec15db9"},{"url":"/blog/python/2020/11/01/python-is-cool.html","revision":"44491dd28f140b1ccbd9924f7cb5cbce"},{"url":"/blog/service-worker.js","revision":"8d00f9ded64cb453971db169294b47c7"},{"url":"/blog/serviceworker.js","revision":"6add9686842cc617d5de7411bb8f838c"},{"url":"/blog/sw-register.js","revision":"d16fb04e0b2f762bc7e57e8c2651758f"},{"url":"/blog/tag/attention.html","revision":"8f62421e33d0365b2c052f988362f5e6"},{"url":"/blog/tag/auto-ML.html","revision":"9b6868394ca81c619c23b6808b4d671c"},{"url":"/blog/tag/autoencoder.html","revision":"3448c8a18b700c89d12cf7d5e14abe84"},{"url":"/blog/tag/evolution.html","revision":"e1d0b0b8afcc9b9560bd51582fb39a1a"},{"url":"/blog/tag/exploration.html","revision":"903959f1a1adf8fd2bdad61fbca19ff2"},{"url":"/blog/tag/foundation.html","revision":"6f24d4f17875cf07702a2c222d94afc7"},{"url":"/blog/tag/gan.html","revision":"6da35a934c1aded54bc7d96208e2150c"},{"url":"/blog/tag/generative-model.html","revision":"3cffd23fecdfe9ef7213a968d6b15c31"},{"url":"/blog/tag/information-theory.html","revision":"bbe60e9291b696919ca91fe0c3fafb7e"},{"url":"/blog/tag/long-read.html","revision":"1cd3d2d697448d73a5bc259e3f2b17af"},{"url":"/blog/tag/meta-learning.html","revision":"73425b3abf4c1ca5709c940dcfb00291"},{"url":"/blog/tag/nlp.html","revision":"6bb1ab5d63030ed8c8ca2dbb7bc6d46c"},{"url":"/blog/tag/object-detection.html","revision":"9616f3e4a90dcf2a899cb95946e2abb0"},{"url":"/blog/tag/object-recognition.html","revision":"47318d76be9b803b2079c76e003bf39a"},{"url":"/blog/tag/reinforcement-learning.html","revision":"da01d5a2c4e0001382c3de4d9a6a68d2"},{"url":"/blog/tag/representation-learning.html","revision":"509583ab8faf9fbd6466f9d4ccbe26b6"},{"url":"/blog/tag/rnn.html","revision":"45462acfc0bcab76964c856d03e0da0b"},{"url":"/blog/tag/tensorflow.html","revision":"64aecfdc74636270daac0a6d7ee73a84"},{"url":"/blog/tag/transformer.html","revision":"ec86a1875738e18a839014ce358fe397"},{"url":"/blog/tag/tutorial.html","revision":"4c99879d40220ae2dc06ab1a8e6af5cf"},{"url":"/blog/tags.html","revision":"f3ac1b889656628ae07a55cfd57935b2"},{"url":"/blog/tutorial/2020/11/01/simple-vim-tutorial.html","revision":"144104657ae5ae443172847d92f7d181"}];
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
