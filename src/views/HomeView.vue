<template>
    <NavigationBar />
    <!-- <video
        src="cloud-bg.mp4"
        autoplay="{true}"
        loop
        muted
        className="absolute w-full h-screen opacity-40"
    ></video> -->
    <HomePage />
    <FooterSection />
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import HomePage from "@/components/HomePage.vue";
import PricingSection from "@/components/PricingSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
    name: "HomeView",
    components: {
        NavigationBar,
        HomePage,
        PricingSection,
        FooterSection,
    },
};
</script>
