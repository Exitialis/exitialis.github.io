<script setup>
useHead({
  title: 'Blog',
})
</script>

<template>
  <article class="blog active" data-page="blog">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.blog') }}
      </h2>
    </header>

    <section class="blog-posts">
      <ul class="blog-posts-list">
        <li class="blog-post-item">
          <a href="https://www.youtube.com/watch?v=OEUIzg-IeyM&list=PLknJ4Vr6efQFHIBKN_igl7Zl6nMbcjrsd&index=5">

            <figure class="blog-banner-box">
            <img src="/images/youtube_pprof_2.jpeg" :alt="$t('blog.youtube_pprof_2.title')" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Video</p>

                <span class="dot" />

                <time datetime="2023-07-31">31 July, 2023</time>
              </div>

              <h3 class="h3 blog-item-title">{{$t('blog.youtube_pprof_2.title')}}</h3>

              <p class="blog-text">
                {{$t('blog.youtube_pprof_2.description')}}
              </p>

            </div>

          </a>
        </li>


        <li class="blog-post-item">
          <a href="https://www.youtube.com/watch?v=o67Elk87kTA&list=PLknJ4Vr6efQFHIBKN_igl7Zl6nMbcjrsd&index=6">

            <figure class="blog-banner-box">
            <img src="/images/youtube_pprof_1.jpeg" :alt="$t('blog.youtube_pprof_1.title')" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Video</p>

                <span class="dot" />

                <time datetime="2023-07-17">17 July, 2023</time>
              </div>

              <h3 class="h3 blog-item-title">{{$t('blog.youtube_pprof_1.title')}}</h3>

              <p class="blog-text">
                {{$t('blog.youtube_pprof_1.description')}}
              </p>

            </div>

          </a>
        </li>


        <li class="blog-post-item">
          <a href="https://rebrainme.com/webinars/golang-profiling-tools-and-optimizing-go-applications/">

            <figure class="blog-banner-box">
            <img src="/images/rebrain.png" :alt="$t('blog.rebrain.title')" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Webinar</p>

                <span class="dot" />

                <time datetime="2021-09-16">September 16, 2021</time>
              </div>

              <h3 class="h3 blog-item-title">{{$t('blog.rebrain.title')}}</h3>

              <p class="blog-text">
                {{$t('blog.rebrain.description')}}
              </p>

            </div>

          </a>
        </li>

        <li class="blog-post-item">
          <a href="https://rebrainme.com/webinars/golang-go-app-profiling-and-optimization-tools/">

            <figure class="blog-banner-box">
            <img src="/images/rebrain_1.png" :alt="$t('blog.rebrain1.title')" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Webinar</p>

                <span class="dot" />

                <time datetime="2021-05-27">May 27, 2021</time>
              </div>

              <h3 class="h3 blog-item-title">{{$t('blog.rebrain1.title')}}</h3>

              <p class="blog-text">
                {{$t('blog.rebrain1.description')}}
              </p>

            </div>

          </a>
        </li>


        <li class="blog-post-item">
          <a href="https://habr.com/en/companies/avito/articles/539024/">

            <figure class="blog-banner-box">
              <img src="https://habrastorage.org/webt/07/h9/fn/07h9fndypvd3otqgh4q5mfbbxwe.png" :alt="$t('blog.goOptimization.title')" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Guide</p>

                <span class="dot" />

                <time datetime="2021-01-27">January 27, 2021</time>
              </div>

              <h3 class="h3 blog-item-title">{{$t('blog.goOptimization.title')}}</h3>

              <p class="blog-text">
                {{$t('blog.goOptimization.description')}}
              </p>

            </div>

          </a>
        </li>

        

      </ul>
    </section>
  </article>
</template>
