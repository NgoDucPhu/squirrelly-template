const container = 
`<h2 class='header'>FEATURE 10</h2>
<div class="feature-first">
    <div class="feature">
        <h2 class="feature__title feature__title--primary">EXPLORE OUR OUTSTANDING FEATURES</h2>

        <div class="feature__content">
            {{@foreach(it.obj) => key, val}}
                {{val | safe}}
            {{/foreach}}
        </div>
    </div>
</div>`;

export {container};