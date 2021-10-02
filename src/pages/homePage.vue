<template>
    <div class="content">
        <header class="index_header w-full">
            <nav class="index_nav">
                <a class="m-0 p-0 items-center" href="#" id="logo">
                    <img src="#" class="w-20 h-7 bg-green-300" alt="logo" />
                </a>
                <ul class="my-4 flex items-center text-black">
                    <li class="index_dropdown">
                        <div class="index_title">入住玖樓</div>
                    </li>
                    <li class="index_dropdown">
                        <div class="index_title">玖樓</div>
                    </li>
                    <li class="index_dropdown">
                        <div class="index_title">服務</div>
                    </li>
                    <li class="index_dropdown">
                        <div class="index_title">日誌</div>
                    </li>
                    <li class="index_transparent">
                        <button class="index_title">登入</button>
                    </li>
                    <li class="index_transparent">
                        <div class="index_title">日誌</div>
                    </li>
                </ul>
            </nav>
        </header>
    
    </div>
</template>

<style>
/* .index_banner *{
z-index: 1;
}
.index_banner::before{
content: '';
position: absolute;
top:0;
left:0;
width: 100%;
height: 100vh   ;
background-color: rgba(0, 0, 0, 0.3);
} */
li {
    letter-spacing: 3.4px;
}
</style>

<script>
export default {
    name: "homePage",
    props: {
        msg: String,
        // image: 'https://9floor.co/backend/web/banner/20200408-7613a5c701c8d4a8f5f42d363c2a536b.png',
    },
};
</script>
