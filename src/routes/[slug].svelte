
<script>

    import Header from '$lib/header/Header.svelte';
    import {page} from '$app/stores'
    import { dev } from '$app/env';

    $: ray = ['Overall', 'E12000008', 'E12000009', 'E12000002']

    $: slug = $page.params.slug

    var domain;

    if (dev) {
        domain = "http://localhost:3000"
    } else {
        domain = "https://occupation.vercel.app"
    }


    let expanded = null;
    function toggle(code) {
        copied = false
        if (expanded==code) {
            expanded = null;
        } else {
            expanded = code;
        }
	}

    import CopyToClipboard from "svelte-copy-to-clipboard";

    var copied = false
    const handleSuccessfullyCopied = (e) => {
        copied = true
    }

    const handleFailedCopy = () => {
        alert('failed to copy :(');
    }

</script>

<div class='article-cont'>
<Header />
{#if slug}
    {#each ray as code}
        <div class="frame-cont">
            <div class='inner-frame'>
                {#if (code=='Overall')}
                    <iframe style='height: 292px' src={domain + "/iframeoverall/" + slug + "-" + code} title="preview"/>
                {:else}
                    <iframe src={domain + "/iframe/" + slug + "-" + code} title="preview"/>
                {/if}
                <br>
                <div style='margin-bottom: 50px;'>
                    <button style='background-color: #ff7ac7' on:click={toggle(code)}>Share</button>
                    <button on:click={toggle(code)}>Embed</button>
                </div>

                {#if expanded==code}
                    <div class="details__body">
                        <label class="embed-code__label" for="embed-365-4262-b9c0-c0b2c28341bb">Embed this interactive</label>
                        <input 
                        class="embed-code__code width-md--31" 
                        value={(code=='Overall')?`<iframe width="100%" src="`+ domain + "/iframeoverall/" + slug + "-" + code +`"></iframe>`:`<iframe width="100%" src="`+ domain + "/iframe/" + slug + "-" + code +`"></iframe>`} 
                        id="embed-365-4262-b9c0-c0b2c28341bb" 
                        name="embed-365-4262-b9c0-c0b2c28341bb" 
                        readonly="">
                        <span class="embed-code__success-container">
                            <CopyToClipboard text={`<iframe width="100%" src="`+ domain + "/iframe/" + slug + "-" + code +`"></iframe>`} on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
                                <button on:click={copy}>Copy</button>
                            </CopyToClipboard>
                            <span class="embed-code__success-message" id={copied?"succ-mess":"no-mess"}>
                                Successfully copied
                            </span>
                        </span>
                    </div>
                {/if}
            </div>
        </div>
    {/each}


    <div class="frame-cont">
        <div class='inner-frame'>
            <iframe src={domain + "/job/" + slug} title="preview"/>
            <br>
            <div style='margin-bottom: 50px;'>
                <button style='background-color: #ff7ac7' on:click={toggle}>Share</button>
                <button on:click={toggle}>Embed</button>
            </div>
        </div>
    </div>
    <div class="frame-cont">
        <div class='inner-frame'>
            <iframe style='height: 360px' src={domain + "/job2/" + slug} title="preview"/>
            <br>
            <div style='margin-bottom: 50px;'>
                <button style='background-color: #ff7ac7' on:click={toggle}>Share</button>
                <button on:click={toggle}>Embed</button>
            </div>
        </div>
    </div>



{/if}
</div>




<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    .inner-frame {
        margin: 40px
    }
    .article-cont {
        width: 640px;
        margin: auto;
    }

    :global(body) {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        color: #323132; 
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0 !important;
    }


    .details__body {
        margin-top: 8px;
        padding: 8px 0 16px 16px;
        border-left: 3px solid #a6a8ab;
    }
    .embed-code__label {
        font-size: 16px;
        font-weight: 600;
    }
    .embed-code__code {
        font-size: 16px;
        height: 40px;
        background-color: #eaeaea;
        border: 3px solid #d0d2d3;
        padding: 8px 16px;
        overflow-x: scroll;
        position: relative;
        border-radius: 0;
        -webkit-appearance: none;
        margin: 0;
        width: 496px!important;
    }

    iframe {
        width: 96%;
        margin: 2%;
        height: 300px;
        border: none;
        /* height: 100% */
    }
    button {
        background: rgb(139, 206, 246);
        color: #44555a;
        padding: 5px 15px;
        border: none;
        margin-left: 40px;
        cursor: pointer;
        font-family: 'Open Sans';
        border-radius: 5px;
        font-weight: 700;
    }
    .frame-cont {
        border: #f8f8f8;
        border-style: solid;
        margin: 20px auto;
        border-width: medium;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        background: #233640;
    }
    .embed-code__success-container {
        position:relative
    }
    .embed-code__success-message {
        position:absolute;background-color:#414042;color:#fff;width:150px;top:40px;left:-58px;font-weight:400;padding:8px;border-radius:3px
        }
    .embed-code__success-message:before {
        content:'';position:absolute;top:-10px;left:128px;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:10px solid #414042
        }
    
    #succ-mess {
        display: revert;
    }
    #no-mess {
        display: none;
    }

</style>