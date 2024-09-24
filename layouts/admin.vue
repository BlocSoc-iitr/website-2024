<template>
    <main class="fixed flex flex-row justify-start w-full h-screen">
        <AdminSidebar />
        <div class="w-[82%] h-full flex flex-col justify-between items-center">
            <AdminHeader />
            <slot />
            <AdminFooter />
        </div>
    </main>
</template>