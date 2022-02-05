<script>
    var ray = ['E12000008', 'E12000009', 'E12000002']
</script>


{#each ray as code}

    <div>
        <iframe src={"http://localhost:3000/sales/" + code} title="preview" />
        <br>
        <button>Share</button>
        <button>Embed</button>
    </div>

{/each}

<style>
    iframe {
        width: 600px;
        margin: 10px;
        height: 60px;
        border: none;
    }
</style>