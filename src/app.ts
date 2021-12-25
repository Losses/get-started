import { html, render } from 'lit-html';

import "@fontsource/ibm-plex-sans";
import "@fontsource/ibm-plex-serif";

import { register as registerRevealHighlight } from "@ax-design/reveal-highlight";
import { register as registerPressure } from "@ax-design/pressure";
import { register as registerAcrylic } from "@ax-design/acrylic";
import { register as registerElevation } from "@ax-design/elevation";

import { startMenu } from './data';
import type { IGroup, ITile } from './data';

registerRevealHighlight({
    compat: true,
    borderDetectionMode: 'experimentalAutoFit',
});

registerPressure();

registerAcrylic();

registerElevation();

const tileTemplate = (tile: ITile) => html`
<li class="tile-container">
    <a href=${tile.href} draggable="false">
        <ax-acrylic>
            <ax-elevation>
                <ax-pressure>
                    <ax-reveal>
                        <div class="tile">
                            <img class="tile-icon" src="${tile.icon}" alt="Icon of ${tile.title}" draggable="false" />
                            <p class="tile-title">${tile.title}</p>
                        </div>
                    </ax-reveal>
                </ax-pressure>
            </ax-elevation>
        </ax-acrylic>
    </a>
</li>
`
// @click=${(e) => console.log(e)}

const groupTemplate = (group: IGroup) => html`
<section class="tile_group">
    <h2 class="tile_group_title">${group.title}</h2>
    <ul class="tiles">
        ${group.tiles.map(tileTemplate)}
    </ul>
</section>
`

const main = html`
<div>
    ${startMenu.map(groupTemplate)}
</div>
`

render(main, document.querySelector('#body') as HTMLDivElement);