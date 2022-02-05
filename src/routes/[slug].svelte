<script>
    import Header from '$lib/header/Header.svelte';
    import {page} from '$app/stores'

    $: ray = ['E12000008', 'E12000009', 'E12000002']

    $: slug = $page.params.slug

    $: console.log('slug', slug)

    var domain = "http://localhost:3000"

    let expanded = null;
    function toggle(code) {
        copied = false
        console.log('text')
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

<Header />

{#if slug}
    {#each ray as code}

        <div class="frame-cont">
            <iframe src={domain + "/iframe/" + slug + "-" + code} title="preview" />
            <br>
            <button on:click={toggle(code)}>Embed</button>

            {#if expanded==code}
                <div class="details__body">
                    <label class="embed-code__label" for="embed-365-4262-b9c0-c0b2c28341bb">Embed this interactive</label>
                    <input class="embed-code__code width-md--31" value={`<iframe width="100%" src="`+ domain + "/iframe/" + slug + "-" + code +`""></iframe>`} id="embed-365-4262-b9c0-c0b2c28341bb" name="embed-365-4262-b9c0-c0b2c28341bb" readonly="">
                    <span class="embed-code__success-container">
                        <CopyToClipboard text={`<iframe width="100%" src="`+ domain + "/iframe/" + slug + "-" + code +`""></iframe>`} on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
                            <button on:click={copy}>Copy</button>
                        </CopyToClipboard>
                        <span class="embed-code__success-message" id={copied?"succ-mess":"no-mess"}>
                            Successfully copied
                        </span>
                    </span>
                </div>
            {/if}
        </div>

    {/each}
{/if}


<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
    :global(body) {
    font-family: open sans,Helvetica,Arial,sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #323132;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
        width: 600px;
        margin: 10px;
        height: 60px;
        border: none;
    }
    button {
        background: #0f8243;
        color: white;
        padding: 5px 15px;
        border: none;
        margin-left: 40px;
        cursor: pointer;
    }
    .frame-cont {
        border: #e0e0e0;
        border-style: solid;
        padding: 20px;
        margin: 20px auto;
        border-width: medium;
        border-radius: 10px;
        width: 680px;
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