<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <a href="#" class="text-sm">
      <img src="./assets/logo.png" alt="Logo" class="h-9" />
    </a>
    <a href="#">
      <div v-if="true" class="flex items-center gap-1">
        Day complete!
        <CheckCircleIcon class="h-7 text-green-500" />
      </div>
      <div v-else class="flex items-center gap-1">
        <div>Progress: <span class="font-mono">20%</span></div>
        <div class="h-3 w-3 rounded-full bg-red-500"></div>
      </div>
    </a>
  </header>
  <main class="flex grow flex-col">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste sint quia tempore error qui ipsam
    eius aut, eum blanditiis eaque totam est aliquid quod accusamus ducimus esse a cum! Nemo id
    possimus deleniti animi aliquam explicabo in sapiente modi! Labore libero molestiae facere minus
    soluta ipsum totam asperiores, dolores voluptatum inventore? Ratione inventore sequi sint
    eligendi excepturi amet illum mollitia. Odit nostrum sequi iusto libero enim eius mollitia a
    assumenda nulla atque dolor, soluta illum unde magnam at quidem delectus beatae neque
    necessitatibus hic pariatur culpa minima? Velit distinctio officiis blanditiis architecto atque.
    Ducimus odit, illum soluta harum tenetur corporis beatae dolores eligendi error nemo? Repellat
    maxime nemo sint maiores quas alias quo minima necessitatibus? Doloremque corporis cupiditate,
    reprehenderit ut esse nostrum nobis facere. Reiciendis tenetur vitae dolorum rerum quis! Ex quae
    expedita aliquam quos! Deserunt assumenda optio, incidunt qui velit ut sed veniam quisquam
    voluptate magni iure suscipit pariatur delectus, ipsam iste sit molestiae exercitationem quasi
    reprehenderit accusantium esse. Fugit itaque nulla, impedit aliquid reprehenderit sapiente nam
    beatae nobis illum ipsam, sint sit obcaecati corporis, laudantium labore nostrum quae minima?
    Accusantium, dolorum molestias? Deleniti excepturi adipisci hic, ad corrupti saepe dolore
    eveniet magnam officia eos sit placeat quisquam dolor error atque totam eius tempore id
    voluptates nostrum incidunt ut iste ipsum sequi? Quae eligendi soluta non cum repellat quia
    officia animi quaerat qui similique velit, tempora sed! Quo unde similique asperiores soluta
    minus maxime sit nesciunt numquam fugiat quas ipsum perspiciatis, dolorum, ab laudantium
    veritatis quos sunt perferendis adipisci veniam temporibus repudiandae laboriosam voluptatum
    sed? Facere voluptatem dolores quisquam, nisi dignissimos nam, magnam tenetur distinctio fugit
    sequi autem explicabo! Quia, id possimus optio doloribus minima numquam excepturi provident iste
    vero quibusdam eum quaerat officia dignissimos! Eius vitae expedita ipsam fugiat itaque culpa.
    Nihil, laborum iusto commodi, totam deserunt aut ipsam quis ducimus nam, fuga sint deleniti
    exercitationem assumenda sapiente nisi! Rem nesciunt ratione, fuga sint esse labore nulla,
    architecto, porro eos amet veniam deleniti molestiae dignissimos doloremque sequi ipsa beatae
    cumque vitae laboriosam facere rerum quas. Aliquam atque iusto corrupti excepturi adipisci id
    aspernatur maiores dolore repellendus at perspiciatis delectus debitis provident rerum nostrum,
    omnis itaque deserunt ullam magni saepe commodi. Autem omnis veritatis facilis nostrum molestiae
    reiciendis et similique veniam eaque totam recusandae laborum consequuntur dolores, hic,
    officiis eos atque earum facere perferendis doloribus voluptas impedit laboriosam, asperiores
    quaerat. Nam eveniet est odit atque sunt mollitia dolorum blanditiis exercitationem ullam at
    harum nostrum, illo quos minus facere expedita, iusto fugit. Quidem esse fuga, at numquam iure
    dolore distinctio facilis sapiente dicta velit tempore. Optio, officiis excepturi error
    explicabo adipisci fuga ullam, expedita illum tenetur tempore quos ipsam possimus quo voluptate
    debitis blanditiis fugit quia ratione quisquam aut accusantium! Illo doloremque asperiores nulla
    debitis aliquid suscipit ea officiis earum. Nisi ipsam omnis nesciunt? Sequi minima adipisci rem
    similique exercitationem odio quia. Cum voluptates sequi provident incidunt dolores quibusdam
    aliquam rerum saepe nemo. Laboriosam quam et est reprehenderit adipisci fugit aspernatur a
    corrupti libero. Dolorum qui sint distinctio expedita suscipit!
  </main>
  <nav class="sticky bottom-0 z-10 bg-white text-3xl">
    <ul>
      <li>
        <a href="#">Timeline</a>
      </li>
      <li>
        <a href="#">Activities</a>
      </li>
      <li>
        <a href="#">Progress</a>
      </li>
    </ul>
  </nav>
</template>
