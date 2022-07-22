export interface GameFolder {
  id: number;
  name: string;
  description?: string;
  content: any; // TODO: blob ?
  subFolders: GameFolder[];
}

export const MOCKED_FOLDERS: GameFolder[] = [
  {
    id: 1,
    name: 'RPG',
    description: 'Best RPG games',
    content: null,
    subFolders: [
      {
        id: 5,
        name: 'Blizzard',
        description: 'Best Blizzard games',
        content: null,
        subFolders: [
          {
            id: 6,
            name: 'Diablo',
            description: 'Diablo',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            subFolders: []
          },
          {
            id: 7,
            name: 'Diablo II',
            description: 'Diablo II',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            subFolders: []
          },
          {
            id: 8,
            name: 'Warcraft III',
            description: 'Warcraft III - Reign Of Chaos',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            subFolders: []
          },
          {
            id: 9,
            name: 'Warcraft III Expansion',
            description: 'Warcraft III - The Frozen Throne',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            subFolders: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Shooter',
    description: 'Best Shooter games',
    content: null,
    subFolders: [
      {
        id: 10,
        name: 'Valve',
        description: 'Best Valve games',
        content: null,
        subFolders: [
          {
            id: 11,
            name: 'Counter Strike 1.6',
            description: 'Counter Strike 1.6',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            subFolders: []
          },
          {
            id: 12,
            name: 'Counter Strike GO',
            description: 'Counter Strike Global Offensive',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            subFolders: []
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Action',
    description: 'Best Action games',
    content: null,
    subFolders: [
      {
        id: 15,
        name: 'MAX-GAMES',
        description: 'MAX-GAMES',
        content: null,
        subFolders: []
      },
      {
        id: 16,
        name: '2k7',
        description: '2k7',
        content: null,
        subFolders: [
          {
            id: 17,
            name: '2k7 2010',
            description: '2k7 2010',
            content: null,
            subFolders: []
          },
          {
            id: 18,
            name: '2k7 2011',
            description: '2k7 2011',
            content: null,
            subFolders: []
          },
          {
            id: 19,
            name: '2k7 Remastered',
            description: '2k7 Remastered',
            content: null,
            subFolders: [
              {
                id: 20,
                name: '2k7 Remastered 1st Edition',
                description: '2k7 Remastered 1st Edition',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                subFolders: []
              },
              {
                id: 21,
                name: '2k7 Remastered 2nd Edition',
                description: '2k7 Remastered 2nd Edition',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                subFolders: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'MOBA',
    description: 'Best MOBA games',
    content: null,
    subFolders: [
      {
        id: 13,
        name: 'Epic Games',
        description: 'Epic Games',
        content: null,
        subFolders: [
          {
            id: 14,
            name: 'Unreal tournament',
            description: 'Unreal tournament',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            subFolders: []
          }
        ]
      }
    ]
  }
];


