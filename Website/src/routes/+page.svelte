<script lang="ts">
  import { Avatar } from '@skeletonlabs/skeleton-svelte';
  import { Tabs } from "@skeletonlabs/skeleton-svelte";
  let group = $state('img');
  const lorem =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo ipsa fugit suscipit autem vitae numquam et cumque praesentium vero eos minus itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo.';
    const imgSrc =
  'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>
<div class="grid grid-rows-[auto_1fr_auto] bg-black">
  <!-- Header -->
  <header class= "p-4 text-right pr-10">Kode With Klossy Data Science Challenge 2025</header>
  <!-- Page -->
  <div class="container mx-auto my-10 grid xl:grid-cols-[200px_minmax(0px,_1fr)_200px]">
    <!-- Sidebar (Left) -->
    <main class=" col-span-1  h-screen p-4 ">
      <Avatar src="./IMG_8012.jpg"name="Anh Hoang" fallbackClasses="hidden" />
    </main>
    <!-- Main -->
    <main class="col-span-1 pl-5">
      <p class=" p-4 font-mono text-xl">Hi, my name is </p>
      <p class="p-4 font-mono text-7xl ">Anh Hoang</p>
      <div class="flex gap-4 pl-4">
          <span class="badge font-mono bg-white text-black">Builder</span>
          <span class="badge font-mono bg-white text-black">DIY-lover</span>
          <span class="badge font-mono bg-white text-black">League-addict</span>
      </div>
      <div class="p-4"><p class = "font-mono">📍 Lawrence, KS</p><p class = "font-mono">🎓 Computer Science, University of Kansas</p>
  <p class = "font-mono">Hi, I’m Anh Hoang — a CS student exploring cybersecurity and machine learning. I love building apps with React Native and diving into AI/ML projects.</p>
      </div>
      <div class = "font-mono pl-5">
        <Tabs value={group} onValueChange={(e) => (group = e.value)} fluid  >
          {#snippet list()}
            <Tabs.Control value="img">My Pics</Tabs.Control>
            <Tabs.Control value="links">My Links</Tabs.Control>
            <Tabs.Control value="journey">My Journey</Tabs.Control>
            <Tabs.Control value="facts">Fun Facts</Tabs.Control>
          {/snippet}
          {#snippet content()}
            <Tabs.Panel value="img" >
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                  <!-- 2. Each card is a simple Tailwind block -->
                  <a
                    
                    class="
                      block
                      w-full
                      bg-white/70
                      text-black
                      rounded-lg
                      overflow-hidden
                      hover:shadow-lg
                      transition-shadow
                    "
                  >
                    <!-- 3. Fixed‐height image container -->
                    <div class="w-full h-60 overflow-hidden">
                      <img
                        src="/DSC01398.jpg"
                        alt="banner"
                        class="w-full h-full object-cover"
                      />
                    </div>

                    <!-- 4. Content -->
                    <div class="p-4">
                      <h3 class="text-lg font-semibold">Photography</h3>
                    </div>
                  </a>
                   <a
                    
                    class="
                      block
                      w-full
                       bg-white/70
                      text-black
                      rounded-lg
                      overflow-hidden
                      hover:shadow-lg
                      transition-shadow
                    "
                  >
                    <!-- 3. Fixed‐height image container -->
                    <div class="w-full h-60 overflow-hidden">
                      <img
                        src="/19FFE5E7-5285-4CED-AF65-094C76009787.jpg"
                        alt="banner"
                        class="w-full h-full object-cover"
                      />
                    </div>

                    <!-- 4. Content -->
                    <div class="p-4">
                      <h3 class="text-lg font-semibold">Sunset</h3>
                    </div>
                  </a>
                   <a
                    
                    class="
                      block
                      w-full
                      bg-white/70
                      text-black
                      rounded-lg
                      overflow-hidden
                      hover:shadow-lg
                      transition-shadow
                    "
                  >
                    <!-- 3. Fixed‐height image container -->
                    <div class="w-full h-60 overflow-hidden">
                      <img
                        src="/IMG_0234.jpg"
                        alt="banner"
                        class="w-full h-full object-cover"
                      />
                    </div>

                    <!-- 4. Content -->
                    <div class="p-4">
                      <h3 class="text-lg font-semibold">Stoner (my cat)</h3>
                    </div>
                  </a>
                  <!-- copy/paste the above <a> two more times for 3 cards total -->
                </div>
            </Tabs.Panel>
            <Tabs.Panel value="links">
              <div class="justify-center">
              <p> I have been playing pool for 2 years now and this what I found really cool! </p>
              <iframe width="800" height="400" src="https://www.youtube.com/embed/f42Wi_6DV14" title="The Simplest Way to Control the Cue Ball" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="journey" class="pl-5">
              <h2>✨ My KWK & Coding Journey ✨</h2>
          <ul class="list-disc list-inside space-y-2">
            <li>📍 <strong>2021</strong>: First Kode With Klossy bootcamp in Vietnam, learning HTML &amp; CSS.</li>
            <li>🎯 <strong>2022</strong>: Applied for U.S. scholarships to pursue a Bachelor’s in Computer Science.</li>
            <li>🇺🇸 <strong>2023</strong>: Started as a CS freshman in the U.S., focused on data structures, algorithms, and introductory cybersecurity.</li>
            <li>🔧 <strong>2024</strong>: Built projects from web apps to embedded systems on Raspberry Pi.</li>
            <li>🤖 <strong>2025</strong>: Concentrating on AI, data analytics, and cybersecurity to create smarter, more secure solutions.</li>
          </ul>
          </Tabs.Panel>
            <Tabs.Panel value="facts">
              <ul class="list-disc list-inside space-y-2">
              <li>❄️ Didn’t see real snow until I was 18—my first white Christmas was in Kansas!</li>
              <li>⌨️ Built my own custom mechanical keyboard from scratch, with lubed switches and hot-swap sockets.</li>
              <li>✈️ Longest flight ever of my life is 49-hour journey: 20 hours in the air; 5 hours of transit time and  an unexpected 24 hr layover in Seattle.</li>
            </ul>
            </Tabs.Panel>
          {/snippet}
        </Tabs>
      </div>
    </main>
    
  </div>
  
</div>
