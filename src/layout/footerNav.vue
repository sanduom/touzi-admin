<template>
	<div class='footer'>
        <p class="intro rflex">
            <span>{{ $t('commons.admin') }}</span>
            <img class="logo" :src="logo" alt="小爱admin">
            <span>力邦管理后台系统</span>
        </p>
        <p class="beian">鄂ICP备18001612号</p>
    </div>
</template>


<script>
    import { github } from "@/utils/env";
    import logoImg from "@/assets/img/logo.png";

export default {
    name: "footerNav",
	data(){
		return {
            logo:logoImg,
            github:github
		}
	},
	methods:{

	}
}
</script>

<style lang="less">
	.footer{
        width: 100%;
        padding: 10px 0;
        font-size:12px;
        text-align: center;
        background: #fff;
        p{
            line-height: 30px;
        }
        .intro{
            width: 240px;
            margin: 0 auto;
            justify-content: space-between;
            align-items: center;
        }
        .logo{
            width: 40px;
            height: 40px;
        }
    }
</style>


