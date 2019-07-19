<template>
    <div class="about">

        <img src="../../../../assets/icons/512x512.png" alt="Logo">

        <article>
            <h2>За приложението</h2>
            AMXX-BG Youtube Downloader е приложение създадено от
            <browser-link href="https://amxx-bg.info/memberlist.php?mode=viewprofile&u=4308">Autumn Shade</browser-link>
            и публикувано под
            <browser-link href="https://choosealicense.com/licenses/mit/">MIT лиценз</browser-link>
            в
            <browser-link href="https://github.com/stfkolev/amxxdl">GitHub</browser-link>
            .
        </article>

        <article>
            Всеки може да споделя идеи и проблеми ето
            <browser-link href="https://github.com/stfkolev/amxxdl/issues/new">тук</browser-link>
            
        </article>


    </div>
</template>

<script>

    // Components
    import BrowserLink from '../../ui/specific/BrowserLink';


    export default {
        components: {BrowserLink},

        data() {
            return {};
        }
    };

</script>

<style lang="scss" scoped>

    .about {
        @include flex(column, center, center);
        color: $palette-snow-white;

        > img {
            width: 10em;
            fill: $palette-turquoise;
            margin-bottom: 1.5em;
            filter: drop-shadow(0 0.15em 0.75em rgba(black, 0.45));
        }
    }

    article {
        @include width(50vw, 10em, 30em);
        font-size: 1.1em;
        text-align: center;
        margin: 0.75em 0 0.5em;
        line-height: 1.25em;
        text-shadow: 0 0.1em 0.2em rgba(black, 0.1);

        > h2 {
            @include font(600, 1.2em);
            margin-bottom: 0.25em;
        }

        &.contributors {

            a, span {
                font-size: 0.9em;
                margin-left: 0.5em;
            }
        }
    }

</style>
