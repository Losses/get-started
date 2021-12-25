export interface IGroup {
    title: string;
    tiles: ITile[];
}

export interface ITile {
    title: string;
    href: string;
    icon: URL;
}

export const startMenu: IGroup[] = [
    {
        title: 'Management',
        tiles: [
            {
                title: 'Router',
                href: '#',
                icon: new URL('./images/icons/router.svg', import.meta.url),
            },
            {
                title: 'NAS',
                href: '#',
                icon: new URL('./images/icons/nas.svg', import.meta.url),
            },
            {
                title: 'Printer',
                href: '#',
                icon: new URL('./images/icons/printer.svg', import.meta.url),
            },
            {
                title: 'Scanner',
                href: '#',
                icon: new URL('./images/icons/scanner.svg', import.meta.url),
            },
            {
                title: 'Home Assistant',
                href: '#',
                icon: new URL('./images/icons/ha.svg', import.meta.url),
            },
            {
                title: 'Bitwarden',
                href: '#',
                icon: new URL('./images/icons/bitwarden.svg', import.meta.url),
            },
            {
                title: 'N8N',
                href: '#',
                icon: new URL('./images/icons/n8n.svg', import.meta.url),
            },
        ],
    },
    {
        title: 'Media',
        tiles: [
            {
                title: 'ArchiveBox',
                href: '#',
                icon: new URL('./images/icons/archivebox.svg', import.meta.url),
            },
            {
                title: 'RSS',
                href: '#',
                icon: new URL('./images/icons/rss.svg', import.meta.url),
            },
            {
                title: 'Plex',
                href: '#',
                icon: new URL('./images/icons/plex.svg', import.meta.url),
            },
            {
                title: 'qBittorrent',
                href: '#',
                icon: new URL('./images/icons/qbittorrent.svg', import.meta.url),
            }
        ]
    }
]