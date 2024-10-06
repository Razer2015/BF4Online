export const games = {
  BFBC: 128,
  BF1943: 8,
  BFH: 8192,
  BFMC: 512,
  BF1942: 4,
  BFP4F: 1024,
  BF3: 2,
  BF2: 32,
  MOHW: 4096,
  BFHEROES: 256,
  BF2142: 64,
  BFBC2: 1,
  BFVIETNAM: 16,
  WARSAW: 2048,
}

export const gameserver = {
  advancedsettings: {
    bool: {
      filters: {
        osls: {
          descriptionSID: 'WARSAW_ID_RSP_SQUAD_LEADER_SPAWN_DESC',
          key: 'osls',
          max: 1,
          min: 0,
          nameSID: 'WARSAW_ID_RSP_SQUAD_LEADER_SPAWN',
          type: 'bool',
          unitType: '',
        },
        v3ca: {
          descriptionSID: 'WARSAW_ID_RSP_3P_VEHICLE_CAM_DESC',
          key: 'v3ca',
          max: 1,
          min: 0,
          nameSID: 'WARSAW_ID_RSP_3P_VEHICLE_CAM',
          type: 'bool',
          unitType: '',
        },
        v3sp: {
          descriptionSID: 'WARSAW_ID_RSP_3D_SPOTTING_DESC',
          key: 'v3sp',
          max: 1,
          min: 0,
          nameSID: 'WARSAW_ID_RSP_3D_SPOTTING',
          type: 'bool',
          unitType: '',
        },
        vaba: {
          descriptionSID: 'WARSAW_ID_RSP_TEAM_BALANCE_DESC',
          key: 'vaba',
          max: 1,
          min: 0,
          nameSID: 'WARSAW_ID_RSP_TEAM_BALANCE',
          type: 'bool',
          unitType: '',
        },
        vffi: {
          descriptionSID: 'WARSAW_ID_RSP_FRIENDLY_FIRE_DESC',
          key: 'vffi',
          max: 1,
          min: 0,
          nameSID: 'WARSAW_ID_RSP_FRIENDLY_FIRE',
          type: 'bool',
          unitType: '',
        },
        vhud: {
          descriptionSID: 'WARSAW_ID_RSP_HUD_DESC',
          key: 'vhud',
          max: 1,
          min: 0,
          nameSID: 'WARSAW_ID_RSP_HUD',
          type: 'bool',
          unitType: '',
        },
        vkca: {
          descriptionSID: 'WARSAW_ID_RSP_KILL_CAM_DESC',
          key: 'vkca',
          max: 1,
          min: 0,
          nameSID: 'WARSAW_ID_RSP_KILL_CAM',
          type: 'bool',
          unitType: '',
        },
        vmin: {
          descriptionSID: 'WARSAW_ID_RSP_MINIMAP_DESC',
          key: 'vmin',
          max: 1,
          min: 0,
          nameSID: 'WARSAW_ID_RSP_MINIMAP',
          type: 'bool',
          unitType: '',
        },
        vmsp: {
          descriptionSID: 'WARSAW_ID_RSP_MINIMAP_SPOTTING_DESC',
          key: 'vmsp',
          max: 1,
          min: 0,
          nameSID: 'WARSAW_ID_RSP_MINIMAP_SPOTTING',
          type: 'bool',
          unitType: '',
        },
        vnta: {
          descriptionSID: 'WARSAW_ID_RSP_NAMETAG_DESC',
          key: 'vnta',
          max: 1,
          min: 0,
          nameSID: 'WARSAW_ID_RSP_NAMETAG',
          type: 'bool',
          unitType: '',
        },
        vrhe: {
          descriptionSID: 'WARSAW_ID_RSP_REGEN_HEALTH_DESC',
          key: 'vrhe',
          max: 1,
          min: 0,
          nameSID: 'WARSAW_ID_RSP_REGEN_HEALTH',
          type: 'bool',
          unitType: '',
        },
        vvsa: {
          descriptionSID: 'WARSAW_ID_RSP_VEHICLES_DESC',
          key: 'vvsa',
          max: 1,
          min: 0,
          nameSID: 'WARSAW_ID_RSP_VEHICLES',
          type: 'bool',
          unitType: '',
        },
      },
      label: 'Game settings',
      type: 'bool',
    },
    number: {
      filters: {
        vnit: {
          descriptionSID: 'WARSAW_ID_RSP_KICK_IDLE_PLAYER_DESC',
          key: 'vnit',
          max: 86400,
          min: 30,
          nameSID: 'WARSAW_ID_RSP_KICK_IDLE_PLAYER',
          type: 'int',
          unitType: 's',
        },
        vtkc: {
          descriptionSID: 'WARSAW_ID_RSP_KICK_AFTER_OF_TK_DESC',
          key: 'vtkc',
          max: 99,
          min: 1,
          nameSID: 'WARSAW_ID_RSP_KICK_AFTER_OF_TK',
          type: 'int',
          unitType: '#',
        },
        vtkk: {
          descriptionSID: 'WARSAW_ID_RSP_BAN_AFTER_OF_TK_DESC',
          key: 'vtkk',
          max: 99,
          min: 1,
          nameSID: 'WARSAW_ID_RSP_BAN_AFTER_OF_TK',
          type: 'int',
          unitType: '#',
        },
      },
      label: 'Rules',
      type: 'number',
    },
    percent: {
      filters: {
        vbdm: {
          descriptionSID: 'WARSAW_ID_RSP_BULLET_MODIFIER_DESC',
          key: 'vbdm',
          max: 300,
          min: 1,
          nameSID: 'WARSAW_ID_RSP_BULLET_MODIFIER',
          type: 'int',
          unitType: 'percent',
        },
        vprt: {
          descriptionSID: 'WARSAW_ID_RSP_PLAYER_RESPAWN_DESC',
          key: 'vprt',
          max: 300,
          min: 1,
          nameSID: 'WARSAW_ID_RSP_PLAYER_RESPAWN',
          type: 'int',
          unitType: 'percent',
        },
        vshe: {
          descriptionSID: 'WARSAW_ID_RSP_PLAYER_HEALTH_DESC',
          key: 'vshe',
          max: 300,
          min: 1,
          nameSID: 'WARSAW_ID_RSP_PLAYER_HEALTH',
          type: 'int',
          unitType: 'percent',
        },
      },
      label: 'Player settings',
      type: 'percent',
    },
  },
  commanderGamesize: [
    {
      id: 64,
      label: 'Commander',
      name: 'commander',
    },
  ],
  commanderGameslots: [
    {
      id: 1,
      label: 'Commander',
    },
  ],
  experienceLookup: {
    1: {
      bulletPoints: [
        {
          bullets: [
            "Control the majority of the objectives to drain the enemies' tickets",
            'Each kill costs the enemy team a ticket',
            'The team with the most tickets remaining wins',
          ],
          header: null,
        },
      ],
      desc: 'Experience our signature game mode on some of the greatest Battlefield maps of all time.',
      expansion: 0,
      name: 'CONQUEST CLASSICS',
      platforms: [64, 1, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 64,
          mapName: 'MP_Siege',
        },
        {
          gameMode: 64,
          mapName: 'MP_Damage',
        },
        {
          gameMode: 64,
          mapName: 'MP_Abandoned',
        },
        {
          gameMode: 64,
          mapName: 'MP_Resort',
        },
        {
          gameMode: 64,
          mapName: 'MP_Flooded',
        },
        {
          gameMode: 64,
          mapName: 'MP_Tremors',
        },
        {
          gameMode: 64,
          mapName: 'MP_TheDish',
        },
        {
          gameMode: 64,
          mapName: 'MP_Naval',
        },
        {
          gameMode: 64,
          mapName: 'MP_Journey',
        },
        {
          gameMode: 64,
          mapName: 'MP_Prison',
        },
      ],
      slug: 'conquest-classics1',
    },
    2: {
      bulletPoints: [
        {
          bullets: [
            'Arm and detonate both enemy objectives in a base to advance',
            'If successful, your team gains new reinforcement tickets and a new base opens up.',
            'Destroy all enemy objectives to win',
          ],
          header: 'ATTACKERS',
        },
        {
          bullets: [
            'Defend your base objectives to stop attackers from advancing',
            'Successfully defend at least one objective to win',
          ],
          header: 'DEFENDERS',
        },
      ],
      desc: 'Together with your team, attack or defend pairs of M-COM objectives.  Kits, gadgets and vehicles are at your disposal.',
      expansion: 0,
      name: 'RUSH CLASSICS',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 2,
          mapName: 'MP_Siege',
        },
        {
          gameMode: 2,
          mapName: 'MP_Damage',
        },
        {
          gameMode: 2,
          mapName: 'MP_Abandoned',
        },
        {
          gameMode: 2,
          mapName: 'MP_Resort',
        },
        {
          gameMode: 2,
          mapName: 'MP_Flooded',
        },
        {
          gameMode: 2,
          mapName: 'MP_Tremors',
        },
        {
          gameMode: 2,
          mapName: 'MP_TheDish',
        },
        {
          gameMode: 2,
          mapName: 'MP_Naval',
        },
        {
          gameMode: 2,
          mapName: 'MP_Journey',
        },
        {
          gameMode: 2,
          mapName: 'MP_Prison',
        },
      ],
      slug: 'rush-classics',
    },
    3: {
      bulletPoints: [
        {
          bullets: [
            'Each enemy kill gives a kill count',
            'The team with the most tickets remaining wins',
          ],
          header: null,
        },
      ],
      desc: 'Small maps, high intensity and no vehicles. One single objective for your team: kill the enemy.',
      expansion: 0,
      name: 'TEAM DEATHMATCH',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 32,
          mapName: 'MP_Siege',
        },
        {
          gameMode: 32,
          mapName: 'MP_Damage',
        },
        {
          gameMode: 32,
          mapName: 'MP_Abandoned',
        },
        {
          gameMode: 32,
          mapName: 'MP_Resort',
        },
        {
          gameMode: 32,
          mapName: 'MP_Flooded',
        },
        {
          gameMode: 32,
          mapName: 'MP_Tremors',
        },
        {
          gameMode: 32,
          mapName: 'MP_TheDish',
        },
        {
          gameMode: 32,
          mapName: 'MP_Naval',
        },
        {
          gameMode: 32,
          mapName: 'MP_Journey',
        },
        {
          gameMode: 32,
          mapName: 'MP_Prison',
        },
      ],
      slug: 'team-deathmatch',
    },
    4: {
      bulletPoints: [
        {
          bullets: [
            'Teams fight over possession of a bomb',
            'The bomb must be planted at the enemy objectives',
            'First team to destroy all enemy objectives wins',
          ],
          header: null,
        },
      ],
      desc: 'Use teamwork to obliterate the enemy by first delivering, then detonating bombs at their bases while defending your own. New game mode in Battlefield 4.',
      expansion: 0,
      name: 'OBLITERATION',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 2097152,
          mapName: 'MP_Siege',
        },
        {
          gameMode: 2097152,
          mapName: 'MP_Damage',
        },
        {
          gameMode: 2097152,
          mapName: 'MP_Abandoned',
        },
        {
          gameMode: 2097152,
          mapName: 'MP_Resort',
        },
        {
          gameMode: 2097152,
          mapName: 'MP_Flooded',
        },
        {
          gameMode: 2097152,
          mapName: 'MP_Tremors',
        },
        {
          gameMode: 2097152,
          mapName: 'MP_TheDish',
        },
        {
          gameMode: 2097152,
          mapName: 'MP_Naval',
        },
        {
          gameMode: 2097152,
          mapName: 'MP_Journey',
        },
        {
          gameMode: 2097152,
          mapName: 'MP_Prison',
        },
      ],
      slug: 'obliteration',
    },
    5: {
      bulletPoints: [
        {
          bullets: [
            'No redeploy - if all players on your team die you lose the round',
            'Attackers can plant and detonate a bomb at one of the two enemy objectives to win a round',
            'The team that wins the most rounds wins the match',
          ],
          header: null,
        },
      ],
      desc: 'Take turns in trying to detonate a bomb at the enemy base. Quick rounds are played out and the team with most won rounds wins the game.',
      expansion: 0,
      name: 'DEFUSE',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 16777216,
          mapName: 'MP_Siege',
        },
        {
          gameMode: 16777216,
          mapName: 'MP_Damage',
        },
        {
          gameMode: 16777216,
          mapName: 'MP_Abandoned',
        },
        {
          gameMode: 16777216,
          mapName: 'MP_Resort',
        },
        {
          gameMode: 16777216,
          mapName: 'MP_Flooded',
        },
        {
          gameMode: 16777216,
          mapName: 'MP_Tremors',
        },
        {
          gameMode: 16777216,
          mapName: 'MP_TheDish',
        },
        {
          gameMode: 16777216,
          mapName: 'MP_Naval',
        },
        {
          gameMode: 16777216,
          mapName: 'MP_Journey',
        },
        {
          gameMode: 16777216,
          mapName: 'MP_Prison',
        },
      ],
      slug: 'defuse',
    },
    6: {
      bulletPoints: [
        {
          bullets: [
            '4 squads combat',
            'Each enemy kill gives a kill count',
            'The squad with the most kills wins',
          ],
          header: null,
        },
      ],
      desc: 'Your squad fights three other squads simultaneous. The objective is for your squad to get the highest amount of kills together.',
      expansion: 0,
      name: 'SQUAD DEATHMATCH',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 8,
          mapName: 'MP_Siege',
        },
        {
          gameMode: 8,
          mapName: 'MP_Damage',
        },
        {
          gameMode: 8,
          mapName: 'MP_Abandoned',
        },
        {
          gameMode: 8,
          mapName: 'MP_Resort',
        },
        {
          gameMode: 8,
          mapName: 'MP_Flooded',
        },
        {
          gameMode: 8,
          mapName: 'MP_Tremors',
        },
        {
          gameMode: 8,
          mapName: 'MP_TheDish',
        },
        {
          gameMode: 8,
          mapName: 'MP_Naval',
        },
        {
          gameMode: 8,
          mapName: 'MP_Journey',
        },
        {
          gameMode: 8,
          mapName: 'MP_Prison',
        },
      ],
      slug: 'squad-deathmatch',
    },
    7: {
      bulletPoints: [
        {
          bullets: [
            "Control the majority of the objectives to drain the enemies' tickets",
            'Each kill costs the enemy team a ticket',
            'The team with the most tickets remaining wins',
          ],
          header: null,
        },
      ],
      desc: 'Capture and hold objectives. Similar to the Conquest game mode but faster pace and smaller maps. No vehicles.',
      expansion: 0,
      name: 'DOMINATION',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 1024,
          mapName: 'MP_Siege',
        },
        {
          gameMode: 1024,
          mapName: 'MP_Damage',
        },
        {
          gameMode: 1024,
          mapName: 'MP_Abandoned',
        },
        {
          gameMode: 1024,
          mapName: 'MP_Resort',
        },
        {
          gameMode: 1024,
          mapName: 'MP_Flooded',
        },
        {
          gameMode: 1024,
          mapName: 'MP_Tremors',
        },
        {
          gameMode: 1024,
          mapName: 'MP_TheDish',
        },
        {
          gameMode: 1024,
          mapName: 'MP_Naval',
        },
        {
          gameMode: 1024,
          mapName: 'MP_Journey',
        },
        {
          gameMode: 1024,
          mapName: 'MP_Prison',
        },
      ],
      slug: 'domination',
    },
    8: {
      bulletPoints: [],
      desc: 'Experience our signature game mode on some of the greatest Battlefield maps of all time.',
      expansion: 1048576,
      name: 'CR CONQUEST',
      platforms: [64, 1, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 64,
          mapName: 'XP1_001',
        },
        {
          gameMode: 64,
          mapName: 'XP1_002',
        },
        {
          gameMode: 64,
          mapName: 'XP1_003',
        },
        {
          gameMode: 64,
          mapName: 'XP1_004',
        },
      ],
      slug: 'cr-conquest1',
    },
    9: {
      bulletPoints: [],
      desc: 'Together with your team, attack or defend pairs of M-COM objectives.  Kits, gadgets and vehicles are at your disposal.',
      expansion: 1048576,
      name: 'CR RUSH',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 2,
          mapName: 'XP1_001',
        },
        {
          gameMode: 2,
          mapName: 'XP1_002',
        },
        {
          gameMode: 2,
          mapName: 'XP1_003',
        },
        {
          gameMode: 2,
          mapName: 'XP1_004',
        },
      ],
      slug: 'cr-rush',
    },
    10: {
      bulletPoints: [],
      desc: 'Small maps, high intensity and no vehicles. One single objective for your team: kill the enemy.',
      expansion: 1048576,
      name: 'CR TEAM DEATHMATCH',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 32,
          mapName: 'XP1_001',
        },
        {
          gameMode: 32,
          mapName: 'XP1_002',
        },
        {
          gameMode: 32,
          mapName: 'XP1_003',
        },
        {
          gameMode: 32,
          mapName: 'XP1_004',
        },
      ],
      slug: 'cr-team-deathmatch',
    },
    11: {
      bulletPoints: [],
      desc: 'Use teamwork to obliterate the enemy by first delivering, then detonating bombs at their bases while defending your own. New game mode in Battlefield 4.',
      expansion: 1048576,
      name: 'CR OBLITERATION',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 2097152,
          mapName: 'XP1_001',
        },
        {
          gameMode: 2097152,
          mapName: 'XP1_002',
        },
        {
          gameMode: 2097152,
          mapName: 'XP1_003',
        },
        {
          gameMode: 2097152,
          mapName: 'XP1_004',
        },
      ],
      slug: 'cr-obliteration',
    },
    12: {
      bulletPoints: [],
      desc: 'Take turns in trying to detonate a bomb at the enemy base. Quick rounds are played out and the team with most won rounds wins the game.',
      expansion: 1048576,
      name: 'CR DEFUSE',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 16777216,
          mapName: 'XP1_001',
        },
        {
          gameMode: 16777216,
          mapName: 'XP1_002',
        },
        {
          gameMode: 16777216,
          mapName: 'XP1_003',
        },
        {
          gameMode: 16777216,
          mapName: 'XP1_004',
        },
      ],
      slug: 'cr-defuse',
    },
    13: {
      bulletPoints: [],
      desc: 'Your squad fights three other squads simultaneous. The objective is for your squad to get the highest amount of kills together.',
      expansion: 1048576,
      name: 'CR SQUAD DEATHMATCH',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 8,
          mapName: 'XP1_001',
        },
        {
          gameMode: 8,
          mapName: 'XP1_002',
        },
        {
          gameMode: 8,
          mapName: 'XP1_003',
        },
        {
          gameMode: 8,
          mapName: 'XP1_004',
        },
      ],
      slug: 'cr-squad-deathmatch',
    },
    14: {
      bulletPoints: [],
      desc: 'Capture and hold objectives. Similar to the Conquest game mode but faster pace and smaller maps. No vehicles.',
      expansion: 1048576,
      name: 'CR DOMINATION',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 1024,
          mapName: 'XP1_001',
        },
        {
          gameMode: 1024,
          mapName: 'XP1_002',
        },
        {
          gameMode: 1024,
          mapName: 'XP1_003',
        },
        {
          gameMode: 1024,
          mapName: 'XP1_004',
        },
      ],
      slug: 'cr-domination',
    },
    15: {
      bulletPoints: [
        {
          bullets: [
            "Control the majority of the objectives to drain the enemies' tickets",
            'Each kill costs the enemy team a ticket',
            'The team with the most tickets remaining wins',
          ],
          header: null,
        },
      ],
      desc: 'Air warfare on a massive scale. Capture and hold objectives using only air vehicles.',
      expansion: 1048576,
      name: 'Air Superiority',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 8388608,
          mapName: 'XP1_001',
        },
        {
          gameMode: 8388608,
          mapName: 'XP1_002',
        },
        {
          gameMode: 8388608,
          mapName: 'XP1_003',
        },
        {
          gameMode: 8388608,
          mapName: 'XP1_004',
        },
      ],
      slug: 'cr-air-superiority',
    },
    16: {
      bulletPoints: [],
      desc: 'Experience our signature game mode on some of the greatest Battlefield maps of all time.',
      expansion: 524288,
      name: 'SA CONQUEST',
      platforms: [64, 1, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 64,
          mapName: 'XP0_Firestorm',
        },
        {
          gameMode: 64,
          mapName: 'XP0_Oman',
        },
        {
          gameMode: 64,
          mapName: 'XP0_Caspian',
        },
        {
          gameMode: 64,
          mapName: 'XP0_Metro',
        },
      ],
      slug: 'sa-conquest1',
    },
    17: {
      bulletPoints: [],
      desc: 'Together with your team, attack or defend pairs of M-COM objectives.  Kits, gadgets and vehicles are at your disposal.',
      expansion: 524288,
      name: 'SA RUSH',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 2,
          mapName: 'XP0_Firestorm',
        },
        {
          gameMode: 2,
          mapName: 'XP0_Oman',
        },
        {
          gameMode: 2,
          mapName: 'XP0_Caspian',
        },
        {
          gameMode: 2,
          mapName: 'XP0_Metro',
        },
      ],
      slug: 'sa-rush',
    },
    18: {
      bulletPoints: [],
      desc: 'Small maps, high intensity and no vehicles. One single objective for your team: kill the enemy.',
      expansion: 524288,
      name: 'SA TEAM DEATHMATCH',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 32,
          mapName: 'XP0_Firestorm',
        },
        {
          gameMode: 32,
          mapName: 'XP0_Oman',
        },
        {
          gameMode: 32,
          mapName: 'XP0_Caspian',
        },
        {
          gameMode: 32,
          mapName: 'XP0_Metro',
        },
      ],
      slug: 'sa-team-deathmatch',
    },
    19: {
      bulletPoints: [],
      desc: 'Use teamwork to obliterate the enemy by first delivering, then detonating bombs at their bases while defending your own. New game mode in Battlefield 4.',
      expansion: 524288,
      name: 'SA OBLITERATION',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 2097152,
          mapName: 'XP0_Firestorm',
        },
        {
          gameMode: 2097152,
          mapName: 'XP0_Oman',
        },
        {
          gameMode: 2097152,
          mapName: 'XP0_Caspian',
        },
        {
          gameMode: 2097152,
          mapName: 'XP0_Metro',
        },
      ],
      slug: 'sa-obliteration',
    },
    20: {
      bulletPoints: [],
      desc: 'Take turns in trying to detonate a bomb at the enemy base. Quick rounds are played out and the team with most won rounds wins the game.',
      expansion: 524288,
      name: 'SA DEFUSE',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 16777216,
          mapName: 'XP0_Firestorm',
        },
        {
          gameMode: 16777216,
          mapName: 'XP0_Oman',
        },
        {
          gameMode: 16777216,
          mapName: 'XP0_Caspian',
        },
        {
          gameMode: 16777216,
          mapName: 'XP0_Metro',
        },
      ],
      slug: 'sa-defuse',
    },
    21: {
      bulletPoints: [],
      desc: 'Your squad fights three other squads simultaneous. The objective is for your squad to get the highest amount of kills together.',
      expansion: 524288,
      name: 'SA SQUAD DEATHMATCH',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 8,
          mapName: 'XP0_Firestorm',
        },
        {
          gameMode: 8,
          mapName: 'XP0_Oman',
        },
        {
          gameMode: 8,
          mapName: 'XP0_Caspian',
        },
        {
          gameMode: 8,
          mapName: 'XP0_Metro',
        },
      ],
      slug: 'sa-squad-deathmatch',
    },
    22: {
      bulletPoints: [],
      desc: 'Capture and hold objectives. Similar to the Conquest game mode but faster pace and smaller maps. No vehicles.',
      expansion: 524288,
      name: 'SA DOMINATION',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 1024,
          mapName: 'XP0_Firestorm',
        },
        {
          gameMode: 1024,
          mapName: 'XP0_Oman',
        },
        {
          gameMode: 1024,
          mapName: 'XP0_Caspian',
        },
        {
          gameMode: 1024,
          mapName: 'XP0_Metro',
        },
      ],
      slug: 'sa-domination',
    },
    23: {
      bulletPoints: [
        {
          bullets: [
            'Capture the enemy flag by bringing it back to your base',
            'Defend your base, if the enemy team has your flag you cannot capture and score points',
            'The first team to capture 3 flags wins',
          ],
          header: null,
        },
      ],
      desc: 'Use teamwork to retrieve the enemy flag to your base while defending your own flag from captures.',
      expansion: 524288,
      name: 'Capture The Flag',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 524288,
          mapName: 'XP0_Firestorm',
        },
        {
          gameMode: 524288,
          mapName: 'XP0_Oman',
        },
        {
          gameMode: 524288,
          mapName: 'XP0_Caspian',
        },
        {
          gameMode: 524288,
          mapName: 'XP0_Metro',
        },
      ],
      slug: 'sa-capture-the-flag',
    },
    24: {
      bulletPoints: [],
      desc: 'Experience our signature game mode on some of the greatest Battlefield maps of all time.',
      expansion: 2097152,
      name: 'NS CONQUEST',
      platforms: [64, 1, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 64,
          mapName: 'XP2_001',
        },
        {
          gameMode: 64,
          mapName: 'XP2_002',
        },
        {
          gameMode: 64,
          mapName: 'XP2_003',
        },
        {
          gameMode: 64,
          mapName: 'XP2_004',
        },
      ],
      slug: 'ns-conquest1',
    },
    25: {
      bulletPoints: [],
      desc: 'Together with your team, attack or defend pairs of M-COM objectives.  Kits, gadgets and vehicles are at your disposal.',
      expansion: 2097152,
      name: 'NS RUSH',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 2,
          mapName: 'XP2_001',
        },
        {
          gameMode: 2,
          mapName: 'XP2_002',
        },
        {
          gameMode: 2,
          mapName: 'XP2_003',
        },
        {
          gameMode: 2,
          mapName: 'XP2_004',
        },
      ],
      slug: 'ns-rush',
    },
    26: {
      bulletPoints: [],
      desc: 'Small maps, high intensity and no vehicles. One single objective for your team: kill the enemy.',
      expansion: 2097152,
      name: 'NS TEAM DEATHMATCH',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 32,
          mapName: 'XP2_001',
        },
        {
          gameMode: 32,
          mapName: 'XP2_002',
        },
        {
          gameMode: 32,
          mapName: 'XP2_003',
        },
        {
          gameMode: 32,
          mapName: 'XP2_004',
        },
      ],
      slug: 'ns-team-deathmatch',
    },
    27: {
      bulletPoints: [],
      desc: 'Use teamwork to obliterate the enemy by first delivering, then detonating bombs at their bases while defending your own. New game mode in Battlefield 4.',
      expansion: 2097152,
      name: 'NS OBLITERATION',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 2097152,
          mapName: 'XP2_001',
        },
        {
          gameMode: 2097152,
          mapName: 'XP2_002',
        },
        {
          gameMode: 2097152,
          mapName: 'XP2_003',
        },
        {
          gameMode: 2097152,
          mapName: 'XP2_004',
        },
      ],
      slug: 'ns-obliteration',
    },
    28: {
      bulletPoints: [],
      desc: 'Take turns in trying to detonate a bomb at the enemy base. Quick rounds are played out and the team with most won rounds wins the game.',
      expansion: 2097152,
      name: 'NS DEFUSE',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 16777216,
          mapName: 'XP2_001',
        },
        {
          gameMode: 16777216,
          mapName: 'XP2_002',
        },
        {
          gameMode: 16777216,
          mapName: 'XP2_003',
        },
        {
          gameMode: 16777216,
          mapName: 'XP2_004',
        },
      ],
      slug: 'ns-defuse',
    },
    29: {
      bulletPoints: [],
      desc: 'Your squad fights three other squads simultaneous. The objective is for your squad to get the highest amount of kills together.',
      expansion: 2097152,
      name: 'NS SQUAD DEATHMATCH',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 8,
          mapName: 'XP2_001',
        },
        {
          gameMode: 8,
          mapName: 'XP2_002',
        },
        {
          gameMode: 8,
          mapName: 'XP2_003',
        },
        {
          gameMode: 8,
          mapName: 'XP2_004',
        },
      ],
      slug: 'ns-squad-deathmatch',
    },
    30: {
      bulletPoints: [],
      desc: 'Capture and hold objectives. Similar to the Conquest game mode but faster pace and smaller maps. No vehicles.',
      expansion: 2097152,
      name: 'NS DOMINATION',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 1024,
          mapName: 'XP2_001',
        },
        {
          gameMode: 1024,
          mapName: 'XP2_002',
        },
        {
          gameMode: 1024,
          mapName: 'XP2_003',
        },
        {
          gameMode: 1024,
          mapName: 'XP2_004',
        },
      ],
      slug: 'ns-domination',
    },
    34: {
      bulletPoints: [
        {
          bullets: [
            'Capture and hold missile launchers to damage the enemy carrier',
            'When the enemy carrier is at half health, it cracks open and can be boarded',
          ],
          header: 'CAPTURE MISSILE SITES',
        },
        {
          bullets: [
            'Board the enemy carrier and destroy the two objectives inside to win',
            'Defend your carrier objectives to prevent the enemy from winning',
            'Destroy the two objectives or bring the carrier to zero health to win the game',
          ],
          header: 'ATTACK AND DEFEND THE CARRIERS',
        },
      ],
      desc: 'Capture and hold objectives to damage the enemy carrier. When the carrier is open take out 2 objectives while defending your own carrier to win.',
      expansion: 2097152,
      name: 'Carrier Assault',
      platforms: [2, 4],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 134217728,
          mapName: 'XP2_001',
        },
        {
          gameMode: 134217728,
          mapName: 'XP2_002',
        },
        {
          gameMode: 134217728,
          mapName: 'XP2_003',
        },
        {
          gameMode: 134217728,
          mapName: 'XP2_004',
        },
      ],
      slug: 'ns-carrier-assault1',
    },
    35: {
      bulletPoints: [
        {
          bullets: [
            'Create links by capturing two adjacent capture points',
            'The more links you control, the more enemy tickets bleed',
            'The team with the most tickets remaining wins',
          ],
          header: null,
        },
      ],
      desc: "Create links by capturing two adjacent capture points.  The more links you control, the more enemy tickets bleed.  It's like a faster Conquest but with links.",
      expansion: 4194304,
      name: 'Chain Link',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 34359738368,
          mapName: 'XP3_MarketPl',
        },
        {
          gameMode: 34359738368,
          mapName: 'XP3_Prpganda',
        },
        {
          gameMode: 34359738368,
          mapName: 'XP3_UrbanGdn',
        },
        {
          gameMode: 34359738368,
          mapName: 'XP3_WtrFront',
        },
      ],
      slug: 'dt-chainlink',
    },
    36: {
      bulletPoints: [],
      desc: 'Experience our signature game mode on some of the greatest Battlefield maps of all time.',
      expansion: 4194304,
      name: 'DT CONQUEST',
      platforms: [64, 1, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 64,
          mapName: 'XP3_MarketPl',
        },
        {
          gameMode: 64,
          mapName: 'XP3_Prpganda',
        },
        {
          gameMode: 64,
          mapName: 'XP3_UrbanGdn',
        },
        {
          gameMode: 64,
          mapName: 'XP3_WtrFront',
        },
      ],
      slug: 'dt-conquest1',
    },
    37: {
      bulletPoints: [],
      desc: 'Together with your team, attack or defend pairs of M-COM objectives.  Kits, gadgets and vehicles are at your disposal.',
      expansion: 4194304,
      name: 'DT RUSH',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 2,
          mapName: 'XP3_MarketPl',
        },
        {
          gameMode: 2,
          mapName: 'XP3_Prpganda',
        },
        {
          gameMode: 2,
          mapName: 'XP3_UrbanGdn',
        },
        {
          gameMode: 2,
          mapName: 'XP3_WtrFront',
        },
      ],
      slug: 'dt-rush',
    },
    38: {
      bulletPoints: [],
      desc: 'Small maps, high intensity and no vehicles. One single objective for your team: kill the enemy.',
      expansion: 4194304,
      name: 'DT TEAM DEATHMATCH',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 32,
          mapName: 'XP3_MarketPl',
        },
        {
          gameMode: 32,
          mapName: 'XP3_Prpganda',
        },
        {
          gameMode: 32,
          mapName: 'XP3_UrbanGdn',
        },
        {
          gameMode: 32,
          mapName: 'XP3_WtrFront',
        },
      ],
      slug: 'dt-team-deathmatch',
    },
    39: {
      bulletPoints: [],
      desc: 'Use teamwork to obliterate the enemy by first delivering, then detonating bombs at their bases while defending your own. New game mode in Battlefield 4.',
      expansion: 4194304,
      name: 'DT OBLITERATION',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 2097152,
          mapName: 'XP3_MarketPl',
        },
        {
          gameMode: 2097152,
          mapName: 'XP3_Prpganda',
        },
        {
          gameMode: 2097152,
          mapName: 'XP3_UrbanGdn',
        },
        {
          gameMode: 2097152,
          mapName: 'XP3_WtrFront',
        },
      ],
      slug: 'dt-obliteration',
    },
    40: {
      bulletPoints: [],
      desc: 'Take turns in trying to detonate a bomb at the enemy base. Quick rounds are played out and the team with most won rounds wins the game.',
      expansion: 4194304,
      name: 'DT DEFUSE',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 16777216,
          mapName: 'XP3_MarketPl',
        },
        {
          gameMode: 16777216,
          mapName: 'XP3_Prpganda',
        },
        {
          gameMode: 16777216,
          mapName: 'XP3_UrbanGdn',
        },
        {
          gameMode: 16777216,
          mapName: 'XP3_WtrFront',
        },
      ],
      slug: 'dt-defuse',
    },
    41: {
      bulletPoints: [],
      desc: 'Your squad fights three other squads simultaneous. The objective is for your squad to get the highest amount of kills together.',
      expansion: 4194304,
      name: 'DT SQUAD DEATHMATCH',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 8,
          mapName: 'XP3_MarketPl',
        },
        {
          gameMode: 8,
          mapName: 'XP3_Prpganda',
        },
        {
          gameMode: 8,
          mapName: 'XP3_UrbanGdn',
        },
        {
          gameMode: 8,
          mapName: 'XP3_WtrFront',
        },
      ],
      slug: 'dt-squad-deathmatch',
    },
    42: {
      bulletPoints: [],
      desc: 'Capture and hold objectives. Similar to the Conquest game mode but faster pace and smaller maps. No vehicles.',
      expansion: 4194304,
      name: 'DT DOMINATION',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 1024,
          mapName: 'XP3_MarketPl',
        },
        {
          gameMode: 1024,
          mapName: 'XP3_Prpganda',
        },
        {
          gameMode: 1024,
          mapName: 'XP3_UrbanGdn',
        },
        {
          gameMode: 1024,
          mapName: 'XP3_WtrFront',
        },
      ],
      slug: 'dt-domination',
    },
    43: {
      bulletPoints: [],
      desc: 'Use teamwork to retrieve the enemy flag to your base while defending your own flag from captures.',
      expansion: 4194304,
      name: 'DT CAPTURE THE FLAG',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 524288,
          mapName: 'XP3_MarketPl',
        },
        {
          gameMode: 524288,
          mapName: 'XP3_Prpganda',
        },
        {
          gameMode: 524288,
          mapName: 'XP3_UrbanGdn',
        },
        {
          gameMode: 524288,
          mapName: 'XP3_WtrFront',
        },
      ],
      slug: 'dt-capture-the-flag',
    },
    45: {
      bulletPoints: [],
      desc: 'Experience our signature game mode on some of the greatest Battlefield maps of all time.',
      expansion: 8388608,
      name: 'FS CONQUEST',
      platforms: [32, 1, 64],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 64,
          mapName: 'XP4_Arctic',
        },
        {
          gameMode: 64,
          mapName: 'XP4_SubBase',
        },
        {
          gameMode: 64,
          mapName: 'XP4_Titan',
        },
        {
          gameMode: 64,
          mapName: 'XP4_WlkrFtry',
        },
      ],
      slug: 'fs-conquest1',
    },
    46: {
      bulletPoints: [],
      desc: 'Together with your team, attack or defend pairs of M-COM objectives.  Kits, gadgets and vehicles are at your disposal.',
      expansion: 8388608,
      name: 'FS RUSH',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 2,
          mapName: 'XP4_Arctic',
        },
        {
          gameMode: 2,
          mapName: 'XP4_SubBase',
        },
        {
          gameMode: 2,
          mapName: 'XP4_Titan',
        },
        {
          gameMode: 2,
          mapName: 'XP4_WlkrFtry',
        },
      ],
      slug: 'fs-rush',
    },
    47: {
      bulletPoints: [],
      desc: 'Small maps, high intensity and no vehicles. One single objective for your team: kill the enemy.',
      expansion: 8388608,
      name: 'FS TEAM DEATHMATCH',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 32,
          mapName: 'XP4_Arctic',
        },
        {
          gameMode: 32,
          mapName: 'XP4_SubBase',
        },
        {
          gameMode: 32,
          mapName: 'XP4_Titan',
        },
        {
          gameMode: 32,
          mapName: 'XP4_WlkrFtry',
        },
      ],
      slug: 'fs-team-deathmatch',
    },
    48: {
      bulletPoints: [],
      desc: 'Use teamwork to obliterate the enemy by first delivering, then detonating bombs at their bases while defending your own. New game mode in Battlefield 4.',
      expansion: 8388608,
      name: 'FS OBLITERATION',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 2097152,
          mapName: 'XP4_Arctic',
        },
        {
          gameMode: 2097152,
          mapName: 'XP4_SubBase',
        },
        {
          gameMode: 2097152,
          mapName: 'XP4_Titan',
        },
        {
          gameMode: 2097152,
          mapName: 'XP4_WlkrFtry',
        },
      ],
      slug: 'fs-obliteration',
    },
    49: {
      bulletPoints: [],
      desc: 'Take turns in trying to detonate a bomb at the enemy base. Quick rounds are played out and the team with most won rounds wins the game.',
      expansion: 8388608,
      name: 'FS DEFUSE',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 16777216,
          mapName: 'XP4_Arctic',
        },
        {
          gameMode: 16777216,
          mapName: 'XP4_SubBase',
        },
        {
          gameMode: 16777216,
          mapName: 'XP4_Titan',
        },
        {
          gameMode: 16777216,
          mapName: 'XP4_WlkrFtry',
        },
      ],
      slug: 'fs-defuse',
    },
    50: {
      bulletPoints: [],
      desc: 'Your squad fights three other squads simultaneous. The objective is for your squad to get the highest amount of kills together.',
      expansion: 8388608,
      name: 'FS SQUAD DEATHMATCH',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 8,
          mapName: 'XP4_Arctic',
        },
        {
          gameMode: 8,
          mapName: 'XP4_SubBase',
        },
        {
          gameMode: 8,
          mapName: 'XP4_Titan',
        },
        {
          gameMode: 8,
          mapName: 'XP4_WlkrFtry',
        },
      ],
      slug: 'fs-squad-deathmatch',
    },
    51: {
      bulletPoints: [],
      desc: 'Capture and hold objectives. Similar to the Conquest game mode but faster pace and smaller maps. No vehicles.',
      expansion: 8388608,
      name: 'FS DOMINATION',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 1024,
          mapName: 'XP4_Arctic',
        },
        {
          gameMode: 1024,
          mapName: 'XP4_SubBase',
        },
        {
          gameMode: 1024,
          mapName: 'XP4_Titan',
        },
        {
          gameMode: 1024,
          mapName: 'XP4_WlkrFtry',
        },
      ],
      slug: 'fs-domination',
    },
    52: {
      bulletPoints: [],
      desc: 'Use teamwork to retrieve the enemy flag to your base while defending your own flag from captures.',
      expansion: 8388608,
      name: 'FS CAPTURE THE FLAG',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 524288,
          mapName: 'XP4_Arctic',
        },
        {
          gameMode: 524288,
          mapName: 'XP4_SubBase',
        },
        {
          gameMode: 524288,
          mapName: 'XP4_Titan',
        },
        {
          gameMode: 524288,
          mapName: 'XP4_WlkrFtry',
        },
      ],
      slug: 'fs-capture-the-flag',
    },
    53: {
      bulletPoints: [
        {
          bullets: [
            'Teams fight over possession of a bomb',
            'The bomb must be planted at the enemy objectives',
            'First team to destroy all enemy objectives wins',
          ],
          header: null,
        },
      ],
      desc: 'Close quarters infantry combat. Both teams fight over possession of a bomb that they need to detonate at the enemy objectives.',
      expansion: 0,
      name: 'SQUAD OBLITERATION',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 137438953472,
          mapName: 'MP_Siege',
        },
        {
          gameMode: 137438953472,
          mapName: 'MP_Abandoned',
        },
        {
          gameMode: 137438953472,
          mapName: 'MP_Resort',
        },
        {
          gameMode: 137438953472,
          mapName: 'MP_Tremors',
        },
        {
          gameMode: 137438953472,
          mapName: 'MP_Naval',
        },
        {
          gameMode: 137438953472,
          mapName: 'MP_Journey',
        },
        {
          gameMode: 137438953472,
          mapName: 'MP_Prison',
        },
      ],
      slug: 'squad-obliteration',
    },
    54: {
      bulletPoints: [
        {
          bullets: [],
          header: null,
        },
      ],
      desc: 'The best vehicle focused Conquest Large maps',
      expansion: null,
      name: 'LARGE SCALE BATTLES',
      platforms: [32, 1, 64],
      premiumPlaylist: true,
      rotation: [
        {
          gameMode: 64,
          mapName: 'MP_Abandoned',
        },
        {
          gameMode: 64,
          mapName: 'MP_Journey',
        },
        {
          gameMode: 64,
          mapName: 'MP_Naval',
        },
        {
          gameMode: 64,
          mapName: 'MP_Siege',
        },
        {
          gameMode: 64,
          mapName: 'MP_Resort',
        },
        {
          gameMode: 64,
          mapName: 'MP_TheDish',
        },
        {
          gameMode: 64,
          mapName: 'XP0_Caspian',
        },
        {
          gameMode: 64,
          mapName: 'XP0_Firestorm',
        },
        {
          gameMode: 64,
          mapName: 'XP1_001',
        },
        {
          gameMode: 64,
          mapName: 'XP1_004',
        },
        {
          gameMode: 64,
          mapName: 'XP2_002',
        },
        {
          gameMode: 64,
          mapName: 'XP2_004',
        },
        {
          gameMode: 64,
          mapName: 'XP3_Prpganda',
        },
        {
          gameMode: 64,
          mapName: 'XP3_WtrFront',
        },
        {
          gameMode: 64,
          mapName: 'XP4_WlkrFtry',
        },
        {
          gameMode: 64,
          mapName: 'XP4_SubBase',
        },
      ],
      slug: 'large-scale-battles',
    },
    55: {
      bulletPoints: [
        {
          bullets: [],
          header: null,
        },
      ],
      desc: 'Battlefield at its best. Conquest Small, Rush, and Obliteration, with a good balance between infantry and vehicle gameplay.',
      expansion: null,
      name: 'THE BATTLEFIELD',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: true,
      rotation: [
        {
          gameMode: 1,
          mapName: 'MP_Abandoned',
        },
        {
          gameMode: 1,
          mapName: 'MP_Journey',
        },
        {
          gameMode: 1,
          mapName: 'MP_Siege',
        },
        {
          gameMode: 1,
          mapName: 'MP_TheDish',
        },
        {
          gameMode: 1,
          mapName: 'XP0_Oman',
        },
        {
          gameMode: 1,
          mapName: 'XP0_Caspian',
        },
        {
          gameMode: 1,
          mapName: 'XP1_001',
        },
        {
          gameMode: 1,
          mapName: 'XP1_003',
        },
        {
          gameMode: 1,
          mapName: 'XP2_003',
        },
        {
          gameMode: 1,
          mapName: 'XP2_004',
        },
        {
          gameMode: 1,
          mapName: 'XP3_Prpganda',
        },
        {
          gameMode: 1,
          mapName: 'XP3_MarketPl',
        },
        {
          gameMode: 1,
          mapName: 'XP4_WlkrFtry',
        },
        {
          gameMode: 1,
          mapName: 'XP4_SubBase',
        },
        {
          gameMode: 2,
          mapName: 'MP_Prison',
        },
        {
          gameMode: 2,
          mapName: 'MP_Abandoned',
        },
        {
          gameMode: 2,
          mapName: 'MP_Siege',
        },
        {
          gameMode: 2,
          mapName: 'MP_Naval',
        },
        {
          gameMode: 2,
          mapName: 'XP0_Metro',
        },
        {
          gameMode: 2,
          mapName: 'XP1_001',
        },
        {
          gameMode: 2,
          mapName: 'XP2_002',
        },
        {
          gameMode: 2,
          mapName: 'XP3_Prpganda',
        },
        {
          gameMode: 2,
          mapName: 'XP4_SubBase',
        },
        {
          gameMode: 2097152,
          mapName: 'MP_Siege',
        },
        {
          gameMode: 2097152,
          mapName: 'MP_Prison',
        },
        {
          gameMode: 2097152,
          mapName: 'MP_Flooded',
        },
        {
          gameMode: 2097152,
          mapName: 'MP_Tremors',
        },
        {
          gameMode: 2097152,
          mapName: 'XP0_Oman',
        },
        {
          gameMode: 2097152,
          mapName: 'XP1_003',
        },
        {
          gameMode: 2097152,
          mapName: 'XP2_003',
        },
        {
          gameMode: 2097152,
          mapName: 'XP3_MarketPl',
        },
        {
          gameMode: 2097152,
          mapName: 'XP4_Arctic',
        },
      ],
      slug: 'the-battlefield',
    },
    56: {
      bulletPoints: [
        {
          bullets: [],
          header: null,
        },
      ],
      desc: 'Smaller scale infantry focused maps and modes',
      expansion: null,
      name: 'CLOSE QUARTERS',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: true,
      rotation: [
        {
          gameMode: 32,
          mapName: 'MP_Siege',
        },
        {
          gameMode: 32,
          mapName: 'MP_Prison',
        },
        {
          gameMode: 32,
          mapName: 'MP_Abandoned',
        },
        {
          gameMode: 32,
          mapName: 'MP_Tremors',
        },
        {
          gameMode: 32,
          mapName: 'MP_Journey',
        },
        {
          gameMode: 32,
          mapName: 'XP0_Metro',
        },
        {
          gameMode: 32,
          mapName: 'XP1_001',
        },
        {
          gameMode: 32,
          mapName: 'XP2_001',
        },
        {
          gameMode: 32,
          mapName: 'XP3_MarketPl',
        },
        {
          gameMode: 32,
          mapName: 'XP4_WlkrFtry',
        },
        {
          gameMode: 1024,
          mapName: 'MP_Siege',
        },
        {
          gameMode: 1024,
          mapName: 'MP_Abandoned',
        },
        {
          gameMode: 1024,
          mapName: 'MP_Damage',
        },
        {
          gameMode: 1024,
          mapName: 'MP_Naval',
        },
        {
          gameMode: 1024,
          mapName: 'XP0_Oman',
        },
        {
          gameMode: 1024,
          mapName: 'XP0_Caspian',
        },
        {
          gameMode: 1024,
          mapName: 'XP1_001',
        },
        {
          gameMode: 1024,
          mapName: 'XP1_004',
        },
        {
          gameMode: 1024,
          mapName: 'XP2_004',
        },
        {
          gameMode: 1024,
          mapName: 'XP3_Prpganda',
        },
        {
          gameMode: 1024,
          mapName: 'XP3_MarketPl',
        },
        {
          gameMode: 1024,
          mapName: 'XP4_SubBase',
        },
        {
          gameMode: 1024,
          mapName: 'XP4_WlkrFtry',
        },
      ],
      slug: 'close-quarters',
    },
    57: {
      bulletPoints: [
        {
          bullets: [
            'Progress through a series of weapons by killing the enemy',
            'The first player to earn a kill with the last weapon wins',
          ],
          header: null,
        },
      ],
      desc: 'Close quarter infantry combat.  Progress through a series of weapons by killing the enemy.  The first player to earn a kill with the last weapon wins.',
      expansion: 0,
      name: 'GUN MASTER',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 512,
          mapName: 'MP_Siege',
        },
        {
          gameMode: 512,
          mapName: 'MP_Damage',
        },
        {
          gameMode: 512,
          mapName: 'MP_Abandoned',
        },
        {
          gameMode: 512,
          mapName: 'MP_Resort',
        },
        {
          gameMode: 512,
          mapName: 'MP_Flooded',
        },
        {
          gameMode: 512,
          mapName: 'MP_Tremors',
        },
        {
          gameMode: 512,
          mapName: 'MP_TheDish',
        },
        {
          gameMode: 512,
          mapName: 'MP_Naval',
        },
        {
          gameMode: 512,
          mapName: 'MP_Journey',
        },
        {
          gameMode: 512,
          mapName: 'MP_Prison',
        },
      ],
      slug: 'gun-master',
    },
    90: {
      bulletPoints: [
        {
          bullets: [],
          header: 'NIGHT OPERATIONS',
        },
      ],
      desc: 'A tactical mode where flashlights, flares, scopes and other gadgets shine in the dark.',
      expansion: 268435456,
      name: 'NIGHT OPERATIONS',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 1,
          mapName: 'XP5_Night_01',
        },
        {
          gameMode: 2097152,
          mapName: 'XP5_Night_01',
        },
        {
          gameMode: 2,
          mapName: 'XP5_Night_01',
        },
      ],
      slug: 'night-operations',
    },
    91: {
      bulletPoints: [
        {
          bullets: [],
          header: 'NIGHT OPERATIONS LARGE',
        },
      ],
      desc: 'A large tactical mode where flashlights, flares, scopes and other gadgets shine in the dark. ',
      expansion: 268435456,
      name: 'NIGHT OPERATIONS LARGE',
      platforms: [64, 1, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 64,
          mapName: 'XP5_Night_01',
        },
      ],
      slug: 'night-operations-large',
    },
    92: {
      bulletPoints: [
        {
          bullets: [],
          header: 'NIGHT OPERATIONS INFANTRY',
        },
      ],
      desc: 'An infantry focused tactical mode where flashlights, flares, scopes and other gadgets shine in the dark.',
      expansion: 268435456,
      name: 'NIGHT OPERATIONS INFANTRY',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 32,
          mapName: 'XP5_Night_01',
        },
        {
          gameMode: 512,
          mapName: 'XP5_Night_01',
        },
        {
          gameMode: 512,
          mapName: 'XP5_Night_01',
        },
        {
          gameMode: 1024,
          mapName: 'XP5_Night_01',
        },
      ],
      slug: 'night-operations-infantry',
    },
    106: {
      bulletPoints: [
        {
          bullets: [],
          header: 'COMMUNITY OPERATIONS',
        },
      ],
      desc: 'Experience Conquest Small, Rush, Obliteration, CTF, and Chainlink on Operation Outbreak',
      expansion: 8589934592,
      name: 'COMMUNITY OPERATIONS',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 1,
          mapName: 'XP6_CMP',
        },
        {
          gameMode: 2097152,
          mapName: 'XP6_CMP',
        },
        {
          gameMode: 2,
          mapName: 'XP6_CMP',
        },
        {
          gameMode: 34359738368,
          mapName: 'XP6_CMP',
        },
        {
          gameMode: 524288,
          mapName: 'XP6_CMP',
        },
      ],
      slug: 'community-operations',
    },
    107: {
      bulletPoints: [
        {
          bullets: [],
          header: 'COMMUNITY OPERATIONS LARGE',
        },
      ],
      desc: 'Experience Conquest Large on Operation Outbreak',
      expansion: 8589934592,
      name: 'COMMUNITY OPERATIONS LARGE',
      platforms: [64, 32, 1],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 64,
          mapName: 'XP6_CMP',
        },
      ],
      slug: 'community-operations-large',
    },
    108: {
      bulletPoints: [
        {
          bullets: [],
          header: 'ID_RSP_XP6_ INFANTRY',
        },
      ],
      desc: 'Experience infantry based game modes on Operation Outbreak',
      expansion: 8589934592,
      name: 'COMMUNITY OPERATIONS INFANTRY',
      platforms: [64, 1, 2, 4, 32],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 32,
          mapName: 'XP6_CMP',
        },
        {
          gameMode: 32,
          mapName: 'XP6_CMP',
        },
        {
          gameMode: 512,
          mapName: 'XP6_CMP',
        },
        {
          gameMode: 1024,
          mapName: 'XP6_CMP',
        },
        {
          gameMode: 8,
          mapName: 'XP6_CMP',
        },
        {
          gameMode: 512,
          mapName: 'XP6_CMP',
        },
        {
          gameMode: 8,
          mapName: 'XP6_CMP',
        },
      ],
      slug: 'community-operations-infantry',
    },
    109: {
      bulletPoints: [
        {
          bullets: [],
          header: 'LEGACY OPERATIONS',
        },
      ],
      desc: 'Experience Conquest Small, Rush and Obliteration on Dragon Valley 2015',
      expansion: 17179869184,
      name: 'LEGACY OPERATIONS',
      platforms: [64, 32, 1],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 1,
          mapName: 'XP7_Valley',
        },
        {
          gameMode: 2097152,
          mapName: 'XP7_Valley',
        },
        {
          gameMode: 2,
          mapName: 'XP7_Valley',
        },
      ],
      slug: 'legacy-operations',
    },
    110: {
      bulletPoints: [
        {
          bullets: [],
          header: 'LEGACY OPERATIONS LARGE',
        },
      ],
      desc: 'Experience Conquest Large on Dragon Valley 2015',
      expansion: 17179869184,
      name: 'LEGACY OPERATIONS LARGE',
      platforms: [64, 32, 1],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 64,
          mapName: 'XP7_Valley',
        },
      ],
      slug: 'legacy-operations-large',
    },
    111: {
      bulletPoints: [
        {
          bullets: [],
          header: 'ID_RSP_XP7_ INFANTRY',
        },
      ],
      desc: 'Experience infantry based game modes on Dragon Valley 2015',
      expansion: 17179869184,
      name: 'LEGACY OPERATIONS INFANTRY',
      platforms: [64, 32, 1],
      premiumPlaylist: false,
      rotation: [
        {
          gameMode: 32,
          mapName: 'XP7_Valley',
        },
        {
          gameMode: 512,
          mapName: 'XP7_Valley',
        },
        {
          gameMode: 1024,
          mapName: 'XP7_Valley',
        },
        {
          gameMode: 8,
          mapName: 'XP7_Valley',
        },
      ],
      slug: 'legacy-operations-infantry',
    },
  },
  gameServerSettings: {
    aaro: {
      descriptionSID: 'WARSAW_ID_M_AIM_ASSIST_HINT',
      key: 'aaro',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_M_AIM_ASSIST',
      type: 'bool',
      unitType: '',
    },
    aasl: {
      descriptionSID: 'WARSAW_ID_M_AIM_ASSIST_SLOWDOWN_HINT',
      key: 'aasl',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_M_AIM_ASSIST_SLOWDOWN',
      type: 'bool',
      unitType: '',
    },
    gmwp: {
      descriptionSID: 'WARSAW_ID_RSP_GUNMASTER_WEAPON_PRESET_DESC',
      key: 'gmwp',
      max: 5,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_GUNMASTER_WEAPON_PRESET',
      type: 'int',
      unitType: '',
    },
    osls: {
      descriptionSID: 'WARSAW_ID_RSP_SQUAD_LEADER_SPAWN_DESC',
      key: 'osls',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_SQUAD_LEADER_SPAWN',
      type: 'bool',
      unitType: '',
    },
    v3ca: {
      descriptionSID: 'WARSAW_ID_RSP_3P_VEHICLE_CAM_DESC',
      key: 'v3ca',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_3P_VEHICLE_CAM',
      type: 'bool',
      unitType: '',
    },
    v3sp: {
      descriptionSID: 'WARSAW_ID_RSP_3D_SPOTTING_DESC',
      key: 'v3sp',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_3D_SPOTTING',
      type: 'bool',
      unitType: '',
    },
    vaba: {
      descriptionSID: 'WARSAW_ID_RSP_TEAM_BALANCE_DESC',
      key: 'vaba',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_TEAM_BALANCE',
      type: 'bool',
      unitType: '',
    },
    vbdm: {
      descriptionSID: 'WARSAW_ID_RSP_BULLET_MODIFIER_DESC',
      key: 'vbdm',
      max: 300,
      min: 1,
      nameSID: 'WARSAW_ID_RSP_BULLET_MODIFIER',
      type: 'int',
      unitType: 'percent',
    },
    vcmd: {
      descriptionSID: 'WARSAW_ID_RSP_ALLOW_COMMANDERS_DESC',
      key: 'vcmd',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_ALLOW_COMMANDERS',
      type: 'bool',
      unitType: '',
    },
    vffi: {
      descriptionSID: 'WARSAW_ID_RSP_FRIENDLY_FIRE_DESC',
      key: 'vffi',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_FRIENDLY_FIRE',
      type: 'bool',
      unitType: '',
    },
    vfrm: {
      descriptionSID: 'WARSAW_ID_RSP_RELOAD_FULL_MAGS_DESC',
      key: 'vfrm',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_RELOAD_FULL_MAGS',
      type: 'bool',
      unitType: '',
    },
    vgmc: {
      default: 100,
      descriptionSID: 'ID_RSP_TICKET_PERCENTAGE_DESC',
      key: 'vgmc',
      max: 500,
      min: 0,
      nameSID: 'ID_RSP_TICKET_PERCENTAGE',
      ranked: 'true',
      type: 'int',
      unitType: 'percent',
    },
    vhit: {
      descriptionSID: 'WARSAW_ID_RSP_HIT_INDICATOR_DESC',
      key: 'vhit',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_HIT_INDICATOR',
      type: 'bool',
      unitType: '',
    },
    vhud: {
      descriptionSID: 'WARSAW_ID_RSP_HUD_DESC',
      key: 'vhud',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_HUD',
      type: 'bool',
      unitType: '',
    },
    vicc: {
      descriptionSID: 'WARSAW_ID_RSP_IS_OBL_COMPETITIVE_MODE_DESC',
      key: 'vicc',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_IS_OBL_COMPETITIVE_MODE',
      type: 'bool',
      unitType: '',
    },
    vinb: {
      descriptionSID: 'WARSAW_ID_RSP_NOOB_ONLY_DESC',
      key: 'vinb',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_NOOB_ONLY',
      type: 'bool',
      unitType: '',
    },
    vkca: {
      descriptionSID: 'WARSAW_ID_RSP_KILL_CAM_DESC',
      key: 'vkca',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_KILL_CAM',
      type: 'bool',
      unitType: '',
    },
    vmin: {
      descriptionSID: 'WARSAW_ID_RSP_MINIMAP_DESC',
      key: 'vmin',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_MINIMAP',
      type: 'bool',
      unitType: '',
    },
    vmpl: {
      descriptionSID: 'WARSAW_ID_RSP_MAX_PLAYERS_DESC',
      key: 'vmpl',
      max: 64,
      min: 4,
      nameSID: 'WARSAW_ID_RSP_MAX_PLAYERS',
      type: 'int',
      unitType: '',
    },
    vmsp: {
      descriptionSID: 'WARSAW_ID_RSP_MINIMAP_SPOTTING_DESC',
      key: 'vmsp',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_MINIMAP_SPOTTING',
      type: 'bool',
      unitType: '',
    },
    vmst: {
      descriptionSID: 'WARSAW_ID_RSP_ALLOW_PUBLIC_SPECTATORS_DESC',
      key: 'vmst',
      max: 4,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_ALLOW_PUBLIC_SPECTATORS',
      type: 'int',
      unitType: '',
    },
    vnip: {
      descriptionSID: 'WARSAW_ID_RSP_TIMEOUT_PERC_DESC',
      key: 'vnip',
      max: 100,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_TIMEOUT_PERC',
      type: 'int',
      unitType: '',
    },
    vnit: {
      descriptionSID: 'WARSAW_ID_RSP_KICK_IDLE_PLAYER_DESC',
      key: 'vnit',
      max: 86400,
      min: 30,
      nameSID: 'WARSAW_ID_RSP_KICK_IDLE_PLAYER',
      type: 'int',
      unitType: 's',
    },
    vnta: {
      descriptionSID: 'WARSAW_ID_RSP_NAMETAG_DESC',
      key: 'vnta',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_NAMETAG',
      type: 'bool',
      unitType: '',
    },
    vprb: {
      descriptionSID: 'WARSAW_ID_RSP_READY_COUNTER_DESC',
      key: 'vprb',
      max: 300,
      min: 30,
      nameSID: 'WARSAW_ID_RSP_READY_COUNTER',
      type: 'int',
      unitType: '',
    },
    vprc: {
      descriptionSID: 'WARSAW_ID_RSP_READY_INT_DESC',
      key: 'vprc',
      max: 33,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_READY_INT',
      type: 'int',
      unitType: '',
    },
    vprp: {
      descriptionSID: 'WARSAW_ID_RSP_READY_PERC_DESC',
      key: 'vprp',
      max: 100,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_READY_PERC',
      type: 'int',
      unitType: '',
    },
    vprt: {
      descriptionSID: 'WARSAW_ID_RSP_PLAYER_RESPAWN_DESC',
      key: 'vprt',
      max: 300,
      min: 1,
      nameSID: 'WARSAW_ID_RSP_PLAYER_RESPAWN',
      type: 'int',
      unitType: 'percent',
    },
    vrhe: {
      descriptionSID: 'WARSAW_ID_RSP_REGEN_HEALTH_DESC',
      key: 'vrhe',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_REGEN_HEALTH',
      type: 'bool',
      unitType: '',
    },
    vrlc: {
      descriptionSID: 'WARSAW_ID_RSP_LOCKDOWN_COUNTDOWN_DESCRIPTION',
      key: 'vrlc',
      max: 15,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_LOCKDOWN_COUNTDOWN',
      type: 'int',
      unitType: '',
    },
    vrsp: {
      descriptionSID: 'WARSAW_ID_RSP_PLAYER_TO_START_DESC',
      key: 'vrsp',
      max: 10,
      min: 1,
      nameSID: 'WARSAW_ID_RSP_PLAYER_TO_START',
      type: 'int',
      unitType: '',
    },
    vrtl: {
      descriptionSID: 'WARSAW_ID_RSP_TIME_LIMIT_DESC',
      key: 'vrtl',
      max: 900,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_TIME_LIMIT',
      type: 'int',
      unitType: '',
    },
    vsbb: {
      descriptionSID: 'WARSAW_ID_RSP_SKILLBASED_BALANCER_DESC',
      key: 'vsbb',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_SKILLBASED_BALANCER',
      type: 'bool',
      unitType: '',
    },
    vshe: {
      descriptionSID: 'WARSAW_ID_RSP_PLAYER_HEALTH_DESC',
      key: 'vshe',
      max: 300,
      min: 1,
      nameSID: 'WARSAW_ID_RSP_PLAYER_HEALTH',
      type: 'int',
      unitType: 'percent',
    },
    vtbr: {
      descriptionSID: 'WARSAW_ID_RSP_TICKET_BLEED_RATE_DESC',
      key: 'vtbr',
      max: 300,
      min: 1,
      nameSID: 'WARSAW_ID_RSP_TICKET_BLEED_RATE',
      type: 'int',
      unitType: '',
    },
    vtkc: {
      descriptionSID: 'WARSAW_ID_RSP_KICK_AFTER_OF_TK_DESC',
      key: 'vtkc',
      max: 99,
      min: 1,
      nameSID: 'WARSAW_ID_RSP_KICK_AFTER_OF_TK',
      type: 'int',
      unitType: '#',
    },
    vtkk: {
      descriptionSID: 'WARSAW_ID_RSP_BAN_AFTER_OF_TK_DESC',
      key: 'vtkk',
      max: 99,
      min: 1,
      nameSID: 'WARSAW_ID_RSP_BAN_AFTER_OF_TK',
      type: 'int',
      unitType: '#',
    },
    vvsa: {
      descriptionSID: 'WARSAW_ID_RSP_VEHICLES_DESC',
      key: 'vvsa',
      max: 1,
      min: 0,
      nameSID: 'WARSAW_ID_RSP_VEHICLES',
      type: 'bool',
      unitType: '',
    },
    vvsd: {
      default: 100,
      descriptionSID: 'ID_RSP_VEHICLE_RESPAWN_DELAY_DESC',
      key: 'vvsd',
      max: 500,
      min: 0,
      nameSID: 'ID_RSP_VEHICLE_RESPAWN_DELAY',
      ranked: 'true',
      type: 'int',
      unitType: '',
    },
  },
  gamedetails: [
    {
      id: 4,
      label: 'Map rotation',
      name: 'mapRotation',
    },
    {
      id: 8,
      label: 'Game mode rotation',
      name: 'modeRotation',
    },
    {
      id: 16,
      label: 'Password protection',
      name: 'password',
    },
  ],
  gameexpansions: [
    {
      id: 0,
      label: 'Warsaw',
    },
  ],
  gamemodes: [
    {
      id: 64,
      label: 'Conquest Large',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      id: 1,
      label: 'Conquest',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      id: 2097152,
      label: 'Obliteration',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      id: 1024,
      label: 'Domination',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      id: 2,
      label: 'Rush',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      id: 8,
      label: 'Squad Deathmatch',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      id: 32,
      label: 'Team Deathmatch',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      id: 16777216,
      label: 'Defuse',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      id: 8388608,
      label: 'Air Superiority',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      id: 524288,
      label: 'Capture the Flag',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      id: 67108864,
      label: 'Carrier Assault Large',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      id: 134217728,
      label: 'Carrier Assault',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      id: 34359738368,
      label: 'Chain Link',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      id: 68719476736,
      label: 'Conquest Ladder',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      id: 137438953472,
      label: 'Squad Obliteration',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      id: 512,
      label: 'Gun Master',
      platforms: [1, 4, 32, 2, 64],
    },
  ],
  gamepresets: [
    {
      id: 1,
      label: 'Normal',
    },
    {
      id: 2,
      label: 'Hardcore',
    },
    {
      id: 4,
      label: 'Infantry Only',
    },
    {
      id: 8,
      label: 'Custom',
    },
    {
      id: 32,
      label: 'Classic',
    },
    {
      id: 64,
      label: 'New Players Only',
    },
  ],
  gamesize: [
    {
      id: 10,
      label: '10',
    },
    {
      id: 16,
      label: '16',
    },
    {
      id: 24,
      label: '24',
    },
    {
      id: 32,
      label: '32',
    },
    {
      id: 48,
      label: '48',
    },
    {
      id: 64,
      label: '64',
    },
    {
      id: 0,
      label: 'Other',
    },
  ],
  gameslots: [
    {
      id: 16,
      label: 'None',
    },
    {
      id: 1,
      label: '1-5',
    },
    {
      id: 2,
      label: '6-10',
    },
    {
      id: 4,
      label: '10+',
    },
    {
      id: 8,
      label: 'All',
    },
  ],
  informalExpansionNameToGameExpansion: {
    DEFAULT: 0,
    XPACK0: 524288,
    XPACK1: 1048576,
    XPACK2: 2097152,
    XPACK3: 4194304,
    XPACK4: 8388608,
    XPACK5: 268435456,
    XPACK6: 8589934592,
    XPACK7: 17179869184,
  },
  mapLookup: {
    MP_Abandoned: {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Abandoned',
      label: 'Zavod 311',
      platforms: [1, 4, 32, 2, 64],
    },
    MP_Damage: {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Damage',
      label: 'Lancang Dam',
      platforms: [1, 4, 32, 2, 64],
    },
    MP_Flooded: {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Flooded',
      label: 'Flood Zone',
      platforms: [1, 4, 32, 2, 64],
    },
    MP_Journey: {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Journey',
      label: 'Golmud Railway',
      platforms: [1, 4, 32, 2, 64],
    },
    MP_Naval: {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Naval',
      label: 'Paracel Storm',
      platforms: [1, 4, 32, 2, 64],
    },
    MP_Prison: {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Prison',
      label: 'Operation Locker',
      platforms: [1, 4, 32, 2, 64],
    },
    MP_Resort: {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Resort',
      label: 'Hainan Resort',
      platforms: [1, 4, 32, 2, 64],
    },
    MP_Siege: {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Siege',
      label: 'Siege of Shanghai',
      platforms: [1, 4, 32, 2, 64],
    },
    MP_TheDish: {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_TheDish',
      label: 'Rogue Transmission',
      platforms: [1, 4, 32, 2, 64],
    },
    MP_Tremors: {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Tremors',
      label: 'Dawnbreaker',
      platforms: [1, 4, 32, 2, 64],
    },
    XP0_Caspian: {
      gameExpansion: 524288,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472,
      ],
      id: 'XP0_Caspian',
      label: 'CASPIAN BORDER 2014',
      platforms: [1, 4, 32, 2, 64],
    },
    XP0_Firestorm: {
      gameExpansion: 524288,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472,
      ],
      id: 'XP0_Firestorm',
      label: 'OPERATION FIRESTORM 2014',
      platforms: [1, 4, 32, 2, 64],
    },
    XP0_Metro: {
      gameExpansion: 524288,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472,
      ],
      id: 'XP0_Metro',
      label: 'OPERATION METRO 2014',
      platforms: [1, 4, 32, 2, 64],
    },
    XP0_Oman: {
      gameExpansion: 524288,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472,
      ],
      id: 'XP0_Oman',
      label: 'GULF OF OMAN 2014',
      platforms: [1, 4, 32, 2, 64],
    },
    XP1_001: {
      gameExpansion: 1048576,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 2097152, 8388608, 16777216, 137438953472,
      ],
      id: 'XP1_001',
      label: 'SILK ROAD',
      platforms: [1, 4, 32, 2, 64],
    },
    XP1_002: {
      gameExpansion: 1048576,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 2097152, 8388608, 16777216, 137438953472,
      ],
      id: 'XP1_002',
      label: 'ALTAI RANGE',
      platforms: [1, 4, 32, 2, 64],
    },
    XP1_003: {
      gameExpansion: 1048576,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 2097152, 8388608, 16777216, 137438953472,
      ],
      id: 'XP1_003',
      label: 'GUILIN PEAKS',
      platforms: [1, 4, 32, 2, 64],
    },
    XP1_004: {
      gameExpansion: 1048576,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 2097152, 8388608, 16777216, 137438953472,
      ],
      id: 'XP1_004',
      label: 'DRAGON PASS',
      platforms: [1, 4, 32, 2, 64],
    },
    XP2_001: {
      gameExpansion: 2097152,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 2097152, 16777216, 67108864, 134217728,
        137438953472,
      ],
      id: 'XP2_001',
      label: 'LOST ISLANDS',
      platforms: [1, 4, 32, 2, 64],
    },
    XP2_002: {
      gameExpansion: 2097152,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 2097152, 16777216, 67108864, 134217728,
        137438953472,
      ],
      id: 'XP2_002',
      label: 'NANSHA STRIKE',
      platforms: [1, 4, 32, 2, 64],
    },
    XP2_003: {
      gameExpansion: 2097152,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 2097152, 16777216, 67108864, 134217728,
        137438953472,
      ],
      id: 'XP2_003',
      label: 'WAVE BREAKER',
      platforms: [1, 4, 32, 2, 64],
    },
    XP2_004: {
      gameExpansion: 2097152,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 2097152, 16777216, 67108864, 134217728,
        137438953472,
      ],
      id: 'XP2_004',
      label: 'OPERATION MORTAR',
      platforms: [1, 4, 32, 2, 64],
    },
    XP3_MarketPl: {
      gameExpansion: 4194304,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 34359738368,
        137438953472,
      ],
      id: 'XP3_MarketPl',
      label: 'PEARL MARKET',
      platforms: [1, 4, 32, 2, 64],
    },
    XP3_Prpganda: {
      gameExpansion: 4194304,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 34359738368,
        137438953472,
      ],
      id: 'XP3_Prpganda',
      label: 'PROPAGANDA',
      platforms: [1, 4, 32, 2, 64],
    },
    XP3_UrbanGdn: {
      gameExpansion: 4194304,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 34359738368,
        137438953472,
      ],
      id: 'XP3_UrbanGdn',
      label: 'LUMPHINI GARDEN',
      platforms: [1, 4, 32, 2, 64],
    },
    XP3_WtrFront: {
      gameExpansion: 4194304,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 34359738368,
        137438953472,
      ],
      id: 'XP3_WtrFront',
      label: 'SUNKEN DRAGON',
      platforms: [1, 4, 32, 2, 64],
    },
    XP4_Arctic: {
      gameExpansion: 8388608,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472,
      ],
      id: 'XP4_Arctic',
      label: 'OPERATION WHITEOUT',
      platforms: [1, 4, 32, 2, 64],
    },
    XP4_SubBase: {
      gameExpansion: 8388608,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472,
      ],
      id: 'XP4_SubBase',
      label: 'HAMMERHEAD',
      platforms: [1, 4, 32, 2, 64],
    },
    XP4_Titan: {
      gameExpansion: 8388608,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472,
      ],
      id: 'XP4_Titan',
      label: 'HANGAR 21',
      platforms: [1, 4, 32, 2, 64],
    },
    XP4_WlkrFtry: {
      gameExpansion: 8388608,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472,
      ],
      id: 'XP4_WlkrFtry',
      label: 'GIANTS OF KARELIA',
      platforms: [1, 4, 32, 2, 64],
    },
    XP5_Night_01: {
      gameExpansion: 268435456,
      gameModes: [1, 2, 32, 64, 512, 1024, 2097152, 137438953472],
      id: 'XP5_Night_01',
      label: 'ZAVOD: GRAVEYARD SHIFT',
      platforms: [1, 4, 32, 2, 64],
    },
    XP6_CMP: {
      gameExpansion: 8589934592,
      gameModes: [
        1, 2, 8, 32, 64, 512, 1024, 524288, 2097152, 34359738368, 137438953472,
      ],
      id: 'XP6_CMP',
      label: 'OPERATION OUTBREAK',
      platforms: [1, 4, 32, 2, 64],
    },
    XP7_Valley: {
      gameExpansion: 17179869184,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 8388608, 137438953472],
      id: 'XP7_Valley',
      label: 'DRAGON VALLEY 2015',
      platforms: [1, 4, 32, 2, 64],
    },
  },
  maps: [
    {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Resort',
      label: 'Hainan Resort',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 524288,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472,
      ],
      id: 'XP0_Firestorm',
      label: 'OPERATION FIRESTORM 2014',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Prison',
      label: 'Operation Locker',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 8388608,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472,
      ],
      id: 'XP4_SubBase',
      label: 'HAMMERHEAD',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Abandoned',
      label: 'Zavod 311',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Tremors',
      label: 'Dawnbreaker',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Siege',
      label: 'Siege of Shanghai',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_TheDish',
      label: 'Rogue Transmission',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 1048576,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 2097152, 8388608, 16777216, 137438953472,
      ],
      id: 'XP1_003',
      label: 'GUILIN PEAKS',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 1048576,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 2097152, 8388608, 16777216, 137438953472,
      ],
      id: 'XP1_002',
      label: 'ALTAI RANGE',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 1048576,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 2097152, 8388608, 16777216, 137438953472,
      ],
      id: 'XP1_001',
      label: 'SILK ROAD',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Flooded',
      label: 'Flood Zone',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 8388608,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472,
      ],
      id: 'XP4_Titan',
      label: 'HANGAR 21',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 1048576,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 2097152, 8388608, 16777216, 137438953472,
      ],
      id: 'XP1_004',
      label: 'DRAGON PASS',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 524288,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472,
      ],
      id: 'XP0_Metro',
      label: 'OPERATION METRO 2014',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 2097152,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 2097152, 16777216, 67108864, 134217728,
        137438953472,
      ],
      id: 'XP2_004',
      label: 'OPERATION MORTAR',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 2097152,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 2097152, 16777216, 67108864, 134217728,
        137438953472,
      ],
      id: 'XP2_001',
      label: 'LOST ISLANDS',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 2097152,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 2097152, 16777216, 67108864, 134217728,
        137438953472,
      ],
      id: 'XP2_002',
      label: 'NANSHA STRIKE',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 2097152,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 2097152, 16777216, 67108864, 134217728,
        137438953472,
      ],
      id: 'XP2_003',
      label: 'WAVE BREAKER',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Journey',
      label: 'Golmud Railway',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 4194304,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 34359738368,
        137438953472,
      ],
      id: 'XP3_MarketPl',
      label: 'PEARL MARKET',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 4194304,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 34359738368,
        137438953472,
      ],
      id: 'XP3_Prpganda',
      label: 'PROPAGANDA',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 8589934592,
      gameModes: [
        1, 2, 8, 32, 64, 512, 1024, 524288, 2097152, 34359738368, 137438953472,
      ],
      id: 'XP6_CMP',
      label: 'OPERATION OUTBREAK',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 4194304,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 34359738368,
        137438953472,
      ],
      id: 'XP3_UrbanGdn',
      label: 'LUMPHINI GARDEN',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 8388608,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472,
      ],
      id: 'XP4_Arctic',
      label: 'OPERATION WHITEOUT',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Naval',
      label: 'Paracel Storm',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 4194304,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 34359738368,
        137438953472,
      ],
      id: 'XP3_WtrFront',
      label: 'SUNKEN DRAGON',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 8388608,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472,
      ],
      id: 'XP4_WlkrFtry',
      label: 'GIANTS OF KARELIA',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 524288,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472,
      ],
      id: 'XP0_Oman',
      label: 'GULF OF OMAN 2014',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 0,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
      id: 'MP_Damage',
      label: 'Lancang Dam',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 17179869184,
      gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 8388608, 137438953472],
      id: 'XP7_Valley',
      label: 'DRAGON VALLEY 2015',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 268435456,
      gameModes: [1, 2, 32, 64, 512, 1024, 2097152, 137438953472],
      id: 'XP5_Night_01',
      label: 'ZAVOD: GRAVEYARD SHIFT',
      platforms: [1, 4, 32, 2, 64],
    },
    {
      gameExpansion: 524288,
      gameModes: [
        1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472,
      ],
      id: 'XP0_Caspian',
      label: 'CASPIAN BORDER 2014',
      platforms: [1, 4, 32, 2, 64],
    },
  ],
  regions: [
    {
      id: 1,
      label: 'North America',
    },
    {
      id: 2,
      label: 'South America',
    },
    {
      id: 4,
      label: 'Antarctica',
    },
    {
      id: 8,
      label: 'Africa',
    },
    {
      id: 16,
      label: 'Europe',
    },
    {
      id: 32,
      label: 'Asia',
    },
    {
      id: 64,
      label: 'Oceania',
    },
  ],
  serverGamemodeLookup: {
    0: 'Unknown',
    1: 'Conquest',
    2: 'Rush',
    8: 'Squad Deathmatch',
    32: 'Team Deathmatch',
    64: 'Conquest Large',
    512: 'Gun Master',
    1024: 'Domination',
    524288: 'Capture the Flag',
    2097152: 'Obliteration',
    8388608: 'Air Superiority',
    16777216: 'Defuse',
    33554432: 'Carrier Assault',
    67108864: 'Carrier Assault Large',
    134217728: 'Carrier Assault',
    34359738368: 'Chain Link',
    68719476736: 'Conquest Ladder',
    137438953472: 'Squad Obliteration',
  },
  serverTypeFilter: [
    {
      id: 1,
      label: 'Official',
    },
    {
      id: 2,
      label: 'Ranked',
    },
    {
      id: 4,
      label: 'Unranked',
    },
    {
      id: 8,
      label: 'Private',
    },
  ],
  serverTypeLookup: {
    0: 'Unknown',
    1: 'Official',
    2: 'Ranked',
    4: 'Unranked',
    8: 'Private',
  },
  spectatorGamesize: [
    {
      id: 128,
      label: 'Spectator',
      name: 'spectator',
    },
  ],
  spectatorGameslots: [
    {
      id: 1,
      label: 'Spectator',
    },
  ],
  squadNames: [
    {
      nameSID: 'No squad',
      order: 0,
    },
    {
      nameSID: 'Alpha',
      order: 1,
    },
    {
      nameSID: 'Bravo',
      order: 2,
    },
    {
      nameSID: 'Charlie',
      order: 3,
    },
    {
      nameSID: 'Delta',
      order: 4,
    },
    {
      nameSID: 'Echo',
      order: 5,
    },
    {
      nameSID: 'Foxtrot',
      order: 6,
    },
    {
      nameSID: 'Golf',
      order: 7,
    },
    {
      nameSID: 'Hotel',
      order: 8,
    },
    {
      nameSID: 'India',
      order: 9,
    },
    {
      nameSID: 'Juliet',
      order: 10,
    },
    {
      nameSID: 'Kilo',
      order: 11,
    },
    {
      nameSID: 'Lima',
      order: 12,
    },
    {
      nameSID: 'Mike',
      order: 13,
    },
    {
      nameSID: 'November',
      order: 14,
    },
    {
      nameSID: 'Oscar',
      order: 15,
    },
    {
      nameSID: 'Papa',
      order: 16,
    },
    {
      nameSID: 'Quebec',
      order: 17,
    },
    {
      nameSID: 'Romeo',
      order: 18,
    },
    {
      nameSID: 'Sierra',
      order: 19,
    },
    {
      nameSID: 'Tango',
      order: 20,
    },
    {
      nameSID: 'Uniform',
      order: 21,
    },
    {
      nameSID: 'Victor',
      order: 22,
    },
    {
      nameSID: 'Whiskey',
      order: 23,
    },
    {
      nameSID: 'Xray',
      order: 24,
    },
    {
      nameSID: 'Yankee',
      order: 25,
    },
    {
      nameSID: 'Zulu',
      order: 26,
    },
    {
      nameSID: 'Haggard',
      order: 27,
    },
    {
      nameSID: 'Sweetwater',
      order: 28,
    },
    {
      nameSID: 'Preston',
      order: 29,
    },
    {
      nameSID: 'Redford',
      order: 30,
    },
    {
      nameSID: 'Faith',
      order: 31,
    },
    {
      nameSID: 'Celeste',
      order: 32,
    },
  ],
  tickRates: [
    {
      id: 30,
      label: 'Normal (30 Hz)',
      value: '30|59',
    },
    {
      id: 60,
      label: 'High (60 Hz)',
      value: '60|119',
    },
    {
      id: 120,
      label: 'Very High (120 Hz)',
      value: '120|143',
    },
    {
      id: 144,
      label: 'Ultra High (144 Hz)',
      value: '144|144',
    },
  ],
}
