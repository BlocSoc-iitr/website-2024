<template>
    <div class="flex flex-row gap-4 w-80">
        <div class="w-24 h-24 bg-gray-100">
            <SvgoProfileMale v-if="gender === 'male'" class="w-24 h-24 text-gray-400"/>
            <SvgoProfileFemale v-else class="w-24 h-24 text-gray-400"/>
        </div>
        <div class="flex flex-col gap-2 w-52">
            <h3 class="text-base font-semibold">{{name}}</h3>
            <p class="text-sm font-medium text-gray-500 break-words">{{designation}}</p>
            <p class="flex flex-row items-center justify-start gap-2 text-xs font-medium text-gray-400">
                <SvgoGithub class="w-4 h-4 cursor-pointer hover:text-gray-600" />
                <SvgoTwitter class="w-4 h-4 cursor-pointer hover:text-gray-600" />
                <SvgoLinkedin class="w-4 h-4 cursor-pointer hover:text-gray-600" />
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        name: string;
        designation: string;
        github: string;
        twitter: string;
        linkedin: string;
        gender: string;
    }>();
</script>