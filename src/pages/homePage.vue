<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div class="content">
        <header class="index_header w-full">
            <nav class="index_nav">
                <a class="m-0 p-0 items-center" href="#" id="logo">
                    <img src="#" class="w-20 h-7 bg-green-300" alt="logo" />
                </a>
                <ul class="my-4 flex items-center">
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
        <div class="index_content index_show opacity-100">
            <!-- TODO:index_show 需要增加 視差滾動效果
            transition : opacity .3s;
            -->
            <div class="index_home flex flex-col items-center">
                <div
                    class="
                        index_banner
                        h-screen
                        w-screen
                        pt-28
                        bg-cover bg-center bg-fixed
                        flex flex-col
                        justify-center
                        items-center
                    "
                    style="
                        background-image: url('https://9floor.co/backend/web/banner/20200408-7613a5c701c8d4a8f5f42d363c2a536b.png');
                    "
                ></div>
                <div
                    class="
                        index_banner-content
                        w-full
                        flex
                        relative
                        justify-center
                        items-center
                    "
                    style="min-height: 150px; z-index: 2"
                >
                    <p
                        class="
                            index_banner-subtitle
                            absolute
                            top-0
                            left-14
                            font-normal
                            text-black
                            leading-relaxed
                            whitespace-pre-line
                            text-sm
                        "
                        style="writing-mode: vertical-rl; letter-spacing: 1.3px"
                    >
                        Live in a community rather than a room.
                    </p>
                    <p
                        class="
                            index_banner-title
                            text-2xl text-black
                            whitespace-pre-line
                            overflow-hidden
                            text-center
                            font-serif font-bold
                            leading-5
                        "
                        style="
                            writing-mode: vertical-rl;
                            max-height: 425px;
                            letter-spacing: 7.7px;
                        "
                    >
                        房子是租來的，生活不是
                    </p>
                </div>
                <a
                    href="#"
                    class="
                        index_button
                        h-7
                        pl-3
                        pr-2.5
                        mt-7
                        flex
                        justify-center
                        relative
                        outline-none
                        transition-all
                        duration-300
                        ease-in-out
                    "
                    style="background-color: #c77155; border: 1px solid #6a4234"
                >
                    <div
                        class="
                            flex
                            text-white
                            items-center
                            justify-center
                            text-sm
                        "
                        style="line-height: 1.75; letter-spacing: 3.4px"
                    >
                        開始搜尋
                    </div>
                    <i class="material-icons inline-block font-normal not-italic leading-4 tracking-normal normal-case whitespace-nowrap"
                    style="direction: ltr;">chevron_right</i>
                </a>
            </div>
        </div>
    </div>
</template>

<style>
.index_banner::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
}
.index_title{
    letter-spacing: 3.4px;
}

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
