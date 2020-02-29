<template>
  <footer class="text-gray-700 text-sm leading-normal flex flex-wrap justify-between mx-auto max-w-3xl px-6 sm:px-12">
    <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
      <p>Let's talk on <a href="https://twitter.com/apparent_dev" class="border-b border-transparent hover:border-gray-400 transition-colors duration-300">Twitter</a>  OR   <a href="https://www.linkedin.com/in/ibrahim-alausa-624a47140/" class="border-b border-transparent hover:border-gray-400 transition-colors duration-300">LinkdIn</a></p>
      <p>Built with <a href="https://gridsome.org" class="border-b border-transparent hover:border-gray-400 transition-colors duration-300">Gridsome</a> &amp; <a href="https://tailwindcss.com/" class="border-b border-transparent hover:border-gray-400 transition-colors duration-300">Tailwind CSS</a>.</p>
    </div>
    <div class="w-full sm:w-1/2">
      <nav>
        <ul class="flex sm:justify-end -mx-2">
          <li class="px-2">
            <g-link to="/" class="border-b border-transparent hover:border-gray-400 transition-colors duration-300">Home</g-link>
          </li>
          <li class="px-2">
            <a href="https://tosinibrahim96.github.io/Resume/" class="border-b border-transparent hover:border-gray-400 transition-colors duration-300">My Portfolio</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
}
</script>
