/*
export const corvniQuestions = [
*/

window.corvniQuestions = [
  // Frage 1
  {
    question: {
      de: "Was ist der Binnenschifffahrtsfunk?",
      fr: " Attention version FR n'est pas à jour !!!! A quoi correspond le service de radiocommunications sur les voies de navigation intérieures ?"
    },
    answers: [
      {
        text: {
          de: "Internationaler mobiler UKW-Sprechfunkdienst auf Binnenschifffahrtsstraßen",
          fr: "Un service mobile radiotéléphonique international en bandes VHF sur des voies de navigation intérieures"
        },
        correct: true
      },
      {
        text: {
          de: "Nationaler mobiler UKW-Sprechfunkdienst auf Binnenschifffahrtsstraßen",
          fr: "Un service mobile radiotéléphonique national en bandes VHF sur des voies de navigation intérieures"
        },
        correct: false
      },
      {
        text: {
          de: "Internationales UKW-Sprechfunkverfahren im Binnenbereich",
          fr: "Une procédure radiotéléphonique internationale en bandes VHF sur des voies de navigation intérieures"
        },
        correct: false
      },
      {
        text: {
          de: "Nationales UKW-Sprechfunkverfahren im Binnenbereich",
          fr: "Une procédure radiotéléphonique nationale en bandes VHF sur des voies de navigation intérieures"
        },
        correct: false
      }
    ]
  },
  // Frage 2
  {
    question: {
      de: "Wozu dient der Binnenschifffahrtsfunk?",
      fr: "Quel est l'objectif du service de radiocommunications sur les voies de navigation intérieures?"
    },
    answers: [
      {
        text: {
          de: "Funkverkehr für bestimmte Zwecke auf vereinbarten Kanälen (Verkehrskreise) und nach einem festgelegten Betriebsverfahren unter Benutzung von ATIS",
          fr: "Permet l'établissement de radiocommunications à des fins déterminées sur des voies définies et selon une procédure d’exploitation reconnue (réseaux) à l’aide de l’ATIS."
        },
        correct: true
      },
      {
        text: {
          de: "Funkverkehr für Schiffsfunkstellen zu bestimmten Zwecken auf vereinbarten Kanälen (Verkehrskreisen) und nach einem festgelegten Betriebsverfahren unter Benutzung von ATIS",
          fr: "Permet l'établissement de radiocommunications entre des stations de bateau à des fins déterminées sur des voies définies (réseaux) et selon une procédure d’exploitation reconnue à l’aide de l’ATIS."
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr zu Landfunkstellen für bestimmte Zwecke auf vereinbarten Kanälen (Verkehrskreisen) und nach einem festgelegten Betriebsverfahren",
          fr: "Permet l'établissement de radiocommunications entre des stations terrestres à des fins déterminées sur des voies définies (réseaux) et selon une procédure d’exploitation reconnue."
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr für Schiffsfunkstellen über Landfunkstellen auf vereinbarten Kanälen (Verkehrskreisen) und nach einem festgelegten Betriebsverfahren dieses Fragenkataloges",
          fr: "Permet l'établissement de radiocommunications entre des stations de bateau et des stations terrestres à des fins déterminées sur des voies définies (réseaux) et selon une procédure d’exploitation définie dans ce catalogue de questions."
        },
        correct: false
      }
    ]
  },
  // Frage 3
  {
    question: {
      de: "Wo findet man Angaben über grundsätzliche Regelungen für den Binnenschifffahrtsfunk in Europa?",
      fr: "Où peut-on trouver des informations sur la règlementation principale pour le service de radiocommunications sur les voies de navigation intérieures en Europe ?"
    },
    answers: [
      {
        text: {
          de: "Regionale Vereinbarung über den Binnenschifffahrtsfunk (RAINWAT)",
          fr: "Arrangement régional relatif au service de radiocommunications sur les voies de navigation intérieure (RAINWAT)"
        },
        correct: true
      },
      {
        text: {
          de: "International Convention for the Safety of Life at Sea (SOLAS)",
          fr: "Convention internationale pour la sauvegarde de la vie humaine en mer (SOLAS)"
        },
        correct: false
      },
      {
        text: {
          de: "Verwaltungsvereinbarung über die Koordinierung von Frequenzen (HCM)",
          fr: "Accord conclu entre Administrations en matière de coordination de fréquences (HCM)"
        },
        correct: false
      },
      {
        text: {
          de: "Handbuch Binnenschifffahrt",
          fr: "Manuel de la navigation intérieure"
        },
        correct: false
      }
    ]
  },
  // Frage 4
  {
    question: {
      de: "Was ist eine „ortsfeste Funkstelle“?",
      fr: "Qu'est-ce qu'une « station fixe »?"
    },
    answers: [
      {
        text: {
          de: "Funkstelle, die an Land betrieben wird",
          fr: "Une station radioélectrique exploitée sur terre"
        },
        correct: true
      },
      {
        text: {
          de: "Funkstelle, die von der internationalen Fernmeldebehörde betrieben wird",
          fr: "Une station radioélectrique exploitée par l'Union Internationale des Télécommunications"
        },
        correct: false
      },
      {
        text: {
          de: "Funkstelle, die an Bord eines nicht dauernd festgemachten Binnenschiffes betrieben wird",
          fr: "Une station radioélectrique qui est exploitée à bord d'un bateau qui n'est pas amarré en permanence."
        },
        correct: false
      },
      {
        text: {
          de: "Funkstelle, die im Verkehrskreis Funkverkehr an Bord betrieben wird",
          fr: "Une station radioélectrique qui est exploitée par le réseau radiocommunications à bord"
        },
        correct: false
      }
    ]
  },
  // Frage 5
  {
    question: {
      de: "Was ist eine „Revierzentrale“?",
      fr: "Qu'est-ce qu'une « Revierzentrale »?"
    },
    answers: [
      {
        text: {
          de: "Landfunkstelle in Deutschland",
          fr: "Une station terrestre centrale en Allemagne"
        },
        correct: true
      },
      {
        text: {
          de: "Zentrale Schiffsfunkstelle in Deutschland",
          fr: "Une station de bateau centrale en Allemagne"
        },
        correct: false
      },
      {
        text: {
          de: "Zentrale Telematikdienste in Deutschland",
          fr: "Des services télématiques centraux en Allemagne"
        },
        correct: false
      },
      {
        text: {
          de: "Zentrale Seefunkstelle in Deutschland",
          fr: "Une station de navire centrale en Allemagne"
        },
        correct: false
      }
    ]
  },
  // Frage 6
  {
    question: {
      de: "Was ist ein „Verkehrsposten“?",
      fr: "Qu'est-ce qu'un \"Verkehrsposten\"?"
    },
    answers: [
      {
        text: {
          de: "Zentrale ortsfeste Funkstelle in den Niederlanden und in Belgien",
          fr: "Station fixe centrale aux Pays-Bas"
        },
        correct: true
      },
      {
        text: {
          de: "Zentrale mobile Funkstelle in den Niederlanden",
          fr: "Station mobile centrale aux Pays-Bas"
        },
        correct: false
      },
      {
        text: {
          de: "Zentrale ortsfeste Funkstelle in den Niederlanden und in Frankreich",
          fr: "Station fixe centrale aux Pays-Bas et en France"
        },
        correct: false
      },
      {
        text: {
          de: "Zentrale mobile Funkstelle in den Niederlanden und in Frankreich",
          fr: "Station mobile centrale aux Pays-Bas et en France"
        },
        correct: false
      }
    ]
  },
  // Frage 7
  {
    question: {
      de: "Was ist ein „Blockkanal“?",
      fr: "Qu'est-ce qu'un \"Blockkanal\"?"
    },
    answers: [

      {
        text: {
          de: "Funkkanal für sicherheitsrelevante Meldungen des „verkeerspost“ und der Schiffsfunkstellen in den Niederlanden und in Belgien",
          fr: "Un canal radiotéléphonique pour des messages de sécurité pour les \"Verkehrsposten\" et les stations de bateau aux Pays-Bas"
        },
        correct: true
      },
      {
        text: {
          de: "Funkkanal für Routinegespräche der Verkehrsposten und Schiffsfunkstellen in den Niederlanden",
          fr: "Un canal radiotéléphonique pour des messages de routine pour les \"Verkehrsposten\" et les stations de bateau aux Pays-Bas"
        },
        correct: false
      },
      {
        text: {
          de: "Gesperrter Funkkanal der Verkehrsposten und Verkehrszentralen in den Niederlanden",
          fr: "Un canal radiotéléphonique verouillé des \"Verkehrsposten\" et \"Verkehrszentralen\" aux Pays-Bas"
        },
        correct: false
      },
      {
        text: {
          de: "Funkkanal für öffentlichen Nachrichtenaustausch in den Niederlanden",
          fr: "Un canal radiotéléphonique pour le réseau de la correspondance publique aux Pays-Bas"
        },
        correct: false
      }
    ]
  },
  // Frage 8
  {
    question: {
      de: "Was bedeutet „MIB“?",
      fr: "Que signifie « MIB » ?"
    },
    answers: [
      {
        text: {
          de: "Melde- und Informationssystem in der Binnenschifffahrt",
          fr: "Un système de notification et d'information sur les voies de navigation intérieures"
        },
        correct: true
      },
      {
        text: {
          de: "Maritimes Identifikationssystem in der Binnenschifffahrt",
          fr: "Un système maritime d'identification sur les voies de navigation intérieures"
        },
        correct: false
      },
      {
        text: {
          de: "Mobiles Informationssystem in der Binnenschifffahrt",
          fr: "Un système mobile d'identification sur les voies de navigation intérieures"
        },
        correct: false
      },
      {
        text: {
          de: "Melde- und Identifikationssystem in der Binnenschifffahrt",
          fr: "Un système de notification et d'identification sur les voies de navigation intérieures"
        },
        correct: false
      }
    ]
  },
  // Frage 9
  {
    question: {
      de: "Wo darf der Inhaber eines in Luxemburg erworbenen UKW-Sprechfunkzeugnisses für den Binnenschifffahrtsfunk am Funkverkehr teilnehmen?",
      fr: "Où le détenteur d'un certificat luxembourgeois de radiotéléphonie VHF sur les voies de navigation intérieures peut-il participer au trafic radiotéléphonique ?"
    },
    answers: [
      {
        text: {
          de: "In allen Ländern, die der Regionalen Vereinbarung über den Binnenschifffahrtsfunk RAINWAT beigetreten sind.",
          fr: "Dans tous les pays signataires de l'Arrangement régional RAINWAT."
        },
        correct: true
      },
      {
        text: {
          de: "In allen Mitgliedstaaten der EU.",
          fr: "Dans tous les pays membres de l'UE."
        },
        correct: false
      },
      {
        text: {
          de: "In allen Staaten, welche die Vollzugsordnung für den Funkdienst der ITU ratifiziert haben.",
          fr: "Dans tous les pays qui ont ratifié le Règlement des Radiocommunications de l’UIT."
        },
        correct: false
      },
      {
        text: {
          de: "In allen deutschsprachigen Ländern.",
          fr: "Dans tous les pays germanophones."
        },
        correct: false
      }
    ]
  },
  // Frage 10
  {
    question: {
      de: "Wer erstellt das UKW-Sprechfunkzeugnis für den Binnenschifffahrtsfunk in Luxemburg?",
      fr: "Qui établit le certificat radiotéléphonique VHF sur les voies de navigation intérieures au Luxembourg?"
    },
    answers: [
      {
        text: {
          de: "Die luxemburgische Regulierungsbehörde (ILR)",
          fr: "L'Institut Luxembourgeois de Régulation (ILR)"
        },
        correct: true
      },
      {
        text: {
          de: "Das luxemburgische Kommissariat für maritime Angelegenheiten (CAM)",
          fr: "Le Commissariat luxembourgeois des affaires maritimes (CAM)"
        },
        correct: false
      },
      {
        text: {
          de: "Das Transportministerium",
          fr: "Le ministère des transports"
        },
        correct: false
      },
      {
        text: {
          de: "Das luxemburgische Wasserwirtschaftsamt",
          fr: "L'Administration de la gestion de l’eau"
        },
        correct: false
      }
    ]
  },
  // Frage 11
  {
    question: {
      de: "Welches dieser Funkzeugnisse berechtigt nicht zur Teilnahme am weltweiten Seenot- und Sicherheitsfunksystem (GMDSS)?",
      fr: "Lequel de ces certificats d'opérateur ne permet pas de participer au Système mondial de détresse et de sécurité en mer (SMDSM)?"
    },
    answers: [
      {
        text: {
          de: "UKW-Sprechfunkzeugnis für den Binnenschifffahrtsfunk (CORVNI)",
          fr: "Le certificat radiotéléphonique VHF pour les voies de navigation intérieures (CORVNI)"
        },
        correct: true
      },
      {
        text: {
          de: "Beschränkt Gültiges Funkbetriebszeugnis (SRC)",
          fr: "Le \"Short Range Certificate\" (SRC)"
        },
        correct: false
      },
      {
        text: {
          de: "Allgemeines Funkbetriebszeugnis (LRC)",
          fr: "Le \"Long Range Certificate\" (LRC)"
        },
        correct: false
      },
      {
        text: {
          de: "Allgemeines Betriebszeugnis für Funker (GOC)",
          fr: "Le certificat général d'opérateur (CGO)"
        },
        correct: false
      }
    ]
  },
  // Frage 12
  {
    question: {
      de: "Welches Funkzeugnis berechtigt zur Teilnahme am Binnenschifffahrtsfunk?",
      fr: "Quel certificat d'opérateur n'autorise pas à participer au service de radiotéléphonie sur les voies de navigation intérieures?"
    },
    answers: [
      {
        text: {
          de: "Amateurfunkzeugnis",
          fr: "Le certificat d'opérateur radioamateur"
        },
        correct: false
      },
      {
        text: {
          de: "Sprechfunkzeugnis für den Binnenschifffahrtsfunk",
          fr: "Le certificat d’opérateur radiotéléphonique pour les voies de navigation intérieures"
        },
        correct: true
      },
      {
        text: {
          de: "Allgemeines Sprechfunkzeugnis für den Seefunkdienst",
          fr: "Le certificat général radiotéléphonique pour le service mobile maritime"
        },
        correct: false
      },
      {
        text: {
          de: "Beschränkt gültiges Betriebszeugnis für Funker",
          fr: "Le certificat restreint d'opérateur (CRO)"
        },
        correct: false
      }
    ]
  },
  // Frage 15
  {
    question: {
      de: "Wo findet man Angaben über die Funkbenutzungspflicht für Fahrzeuge auf bestimmten Binnenschifffahrtsstraßen?",
      fr: "Où peut-on trouver des informations sur l'utilisation obligatoire des services radiotéléphoniques pour les bateaux sur certaines voies navigables intérieures ?"
    },
    answers: [
      {
        text: {
          de: "Regionale Teile des Handbuchs Binnenschifffahrtsfunk",
          fr: "Parties régionales du manuel d’utilisation radiotéléphonique de la navigation intérieure"
        },
        correct: true
      },
      {
        text: {
          de: "Allgemeiner Teil des Handbuchs Binnenschifffahrtsfunk",
          fr: "Partie générale du manuel d’utilisation radiotéléphonique de la navigation intérieure"
        },
        correct: false
      },
      {
        text: {
          de: "Binnenschifffahrt-Sprechfunkverordnung",
          fr: "Règlement radiotéléphonique pour la navigation intérieure"
        },
        correct: false
      },
      {
        text: {
          de: "Binnenschifferpatentverordnung",
          fr: "Règlement sur les brevets en matière de navigation intérieure"
        },
        correct: false
      }
    ]
  },
  // Frage 16
  {
    question: {
      de: "Das Abhörverbot und das Fernmeldegeheimnis sind geregelt…",
      fr: "L'interdiction d'interception et le secret des télécommunications sont règlementés …"
    },
    answers: [
      {
        text: {
          de: "in der ITU Verordnung.",
          fr: "dans la règlementation ITU."
        },
        correct: true
      },
      {
        text: {
          de: "in der Binnenschifffahrt-Sprechfunkverordnung.",
          fr: "dans le règlement grand-ducal sur la radiotéléphonie."
        },
        correct: false
      },
      {
        text: {
          de: "in der großherzoglichen Schiffssicherheitsverordnung.",
          fr: "dans le règlement grand-ducal sur la sécurité des navires."
        },
        correct: false
      },
      {
        text: {
          de: "im Gesetz über Funkanlagen und Telekommunikationseinrichtungen.",
          fr: "dans la loi sur les installations radioélectriques et de télécommunications."
        },
        correct: false
      }
    ]
  },
  // Frage 17
  {
    question: {
      de: "Was unterliegt dem Fernmeldegeheimnis?",
      fr: "Qu'est-ce qui est soumis au secret des télécommunications?"
    },
    answers: [
      {
        text: {
          de: "Inhalt des Funkverkehrs und seine näheren Umstände, insbesondere die Tatsache, daß jemand an der Abwicklung des Funkverkehrs beteiligt ist oder war.",
          fr: "Le contenu des radiocommunications et ses circonstances particulières, notamment le fait qu’une personne soit ou ait été impliquée dans une radiocommunication."
        },
        correct: true
      },
      {
        text: {
          de: "Inhalt des Funkverkehrs und seine näheren Umstände, insbesondere Daten wie z.B. der ATIS-Code.",
          fr: "Le contenu des radiocommunications et ses circonstances particulières, notamment des données comme le code ATIS."
        },
        correct: false
      },
      {
        text: {
          de: "Inhalt des Funkverkehrs und seine näheren Umstände, sofern es sich um einen Nachrichtenaustausch mit einer Revierzentrale handelt.",
          fr: "Le contenu des radiocommunications et ses circonstances particulières s'il s'agit d'une radiocommunication avec une centrale de réseau."
        },
        correct: false
      },
      {
        text: {
          de: "Inhalt des Funkverkehrs und seine näheren Umstände, sofern es sich um einen Nachrichtenaustausch im Rahmen des Not-, Dringlichkeits- und Sicherheitsverkehrs handelt.",
          fr: "Le contenu des radiocommunications et ses circonstances particulières s'il s'agit de trafic radiotéléphonique de détresse, d'urgence et de sécurité."
        },
        correct: false
      }
    ]
  },
  // Frage 18
  {
    question: {
      de: "Welche Nachrichten dürfen uneingeschränkt aufgenommen und verbreitet werden?",
      fr: "Quel trafic radiotéléphonique peut être enregistré et distribué sans restriction ?"
    },
    answers: [
      {
        text: {
          de: "Aussendungen, die „An alle Funkstellen“ gerichtet sind",
          fr: "Emissions dirigées \"à toutes stations\""
        },
        correct: true
      },
      {
        text: {
          de: "Aussendungen des Öffentlichen Nachrichtenaustauschs",
          fr: "Des transmisions de la correspondance publique"
        },
        correct: false
      },
      {
        text: {
          de: "Aussendungen im Verkehrskreis Funkverkehr an Bord",
          fr: "Des transmissions du réseau de communications à bord"
        },
        correct: false
      },
      {
        text: {
          de: "Aussendungen im Binnenschifffahrtsfunk dürfen uneingeschränkt aufgenommen und verbreitet werden",
          fr: "Des transmissions du service radiotéléphonique sur les voies intérieures peuvent intégralement être interceptées et diffusées sans restriction"
        },
        correct: false
      }
    ]
  },
  // Frage 19
  {
    question: {
      de: "Welche Folgen kann die Verletzung des Fernmeldegeheimnisses haben?",
      fr: "Quelles conséquences peut avoir la violation du secret des télécommunications ?"
    },
    answers: [
      {
        text: {
          de: "Strafrechtliche Verfolgung",
          fr: "Poursuites pénales"
        },
        correct: true
      },
      {
        text: {
          de: "Ordnungswidrigkeitsverfahren",
          fr: "Une procédure pour infraction administrative"
        },
        correct: false
      },
      {
        text: {
          de: "Schriftliche Verwarnung",
          fr: "Avertissement écrit"
        },
        correct: false
      },
      {
        text: {
          de: "Einzug der Funkanlage",
          fr: "Confiscation de l'équipement radioélectrique"
        },
        correct: false
      }
    ]
  },
  // Frage 20
  {
    question: {
      de: "Welchen Frequenzbereich nutzt der Binnenschifffahrtsfunk?",
      fr: "Quelle gamme de fréquences est utilisée par le service radiotéléphonique sur les voies de navigation intérieures?"
    },
    answers: [
      {
        text: {
          de: "UKW",
          fr: "VHF"
        },
        correct: true
      },
      {
        text: {
          de: "KW",
          fr: "HF"
        },
        correct: false
      },
      {
        text: {
          de: "MW",
          fr: "MF"
        },
        correct: false
      },
      {
        text: {
          de: "LW",
          fr: "LF"
        },
        correct: false
      }
    ]
  },
  // Frage 21
  {
    question: {
      de: "Wie breiten sich Ultrakurzwellen aus?",
      fr: "Comment les ondes VHF se propagent-elles ?"
    },
    answers: [
      {
        text: {
          de: "Geradlinig und quasioptisch",
          fr: "En ligne droite et quasioptique"
        },
        correct: true
      },
      {
        text: {
          de: "Abhängig von der Tageszeit",
          fr: "En fonction de l'heure de la journée"
        },
        correct: false
      },
      {
        text: {
          de: "Der Erdkrümmung folgend bis weit hinter den Horizont",
          fr: "Suit la courbure de la terre jusqu'à loin au-delà de l'horizon"
        },
        correct: false
      },
      {
        text: {
          de: "In der Ionosphäre reflektiert",
          fr: "Reflétées dans l'ionosphère"
        },
        correct: false
      }
    ]
  },
  // Frage 22
  {
    question: {
      de: "Welche Faktoren können die Ausbreitung der Ultrakurzwellen beeinflussen?",
      fr: "Quels facteurs peuvent affecter la propagation des ondes VHF ?"
    },
    answers: [
      {
        text: {
          de: "Hindernisse, z. B. Berge oder hohe Bauwerke",
          fr: "Des obstacles, tels que montagnes ou des immeubles élevés"
        },
        correct: true
      },
      {
        text: {
          de: "Niederschläge, z. B. Schnee- oder Regenschauer",
          fr: "Précipitations, telles que les averses de neige ou de pluie"
        },
        correct: false
      },
      {
        text: {
          de: "Kurs und Geschwindigkeit des Schiffes",
          fr: "La course et la vitesse du bateau"
        },
        correct: false
      },
      {
        text: {
          de: "Tag- und Nachtschwankungen",
          fr: "Des variations de jour et de nuit"
        },
        correct: false
      }
    ]
  },
  // Frage 23
  {
    question: {
      de: "Was ist eine „Schiffsfunkstelle“?",
      fr: "Qu'est-ce qu'une « station de bateau » ?"
    },
    answers: [
      {
        text: {
          de: "Mobile Funkstelle des Binnenschifffahrtsfunks",
          fr: "Une station mobile du service de radiotéléphonie sur les voies de navigation intérieures"
        },
        correct: true
      },
      {
        text: {
          de: "Mobile Funkstelle des mobilen Seefunkdienstes",
          fr: "Une station mobile du service mobile maritime"
        },
        correct: false
      },
      {
        text: {
          de: "Ortsfeste Funkstelle des Binnenschifffahrtsfunks",
          fr: "Une station fixe du service radiotéléphonique sur les voies de navigation intérieures"
        },
        correct: false
      },
      {
        text: {
          de: "Ortsfeste Funkstelle des mobilen Seefunkdienstes",
          fr: "Une station fixe du service mobile maritime"
        },
        correct: false
      }
    ]
  },
  // Frage 24
  {
    question: {
      de: "Was ist eine „Seefunkstelle“?",
      fr: "Qu'est-ce qu'une « station de navire »?"
    },
    answers: [
      {
        text: {
          de: "Funkstelle des Mobilen Seefunkdienstes an Bord eines nicht dauernd verankerten Seefahrzeugs",
          fr: "Une station mobile du service mobile maritime à bord d'une navire non amarré en permanence"
        },
        correct: true
      },
      {
        text: {
          de: "Funkstelle des Mobilen Seefunkdienstes, die an Land als Küstenfunkstelle betrieben wird",
          fr: "Une station mobile du service mobile maritime, qui est exploitée comme station côtière sur terre"
        },
        correct: false
      },
      {
        text: {
          de: "Funkstelle des Binnenschifffahrtsfunks, die im Seebereich an Bord eines Seeschiffes betrieben wird",
          fr: "Une station mobile du service de radiotéléphonie sur les voies de navigation intérieures, qui est exploitée en mer à bord d'un navire"
        },
        correct: false
      },
      {
        text: {
          de: "Funkstelle des Mobilen Seefunkdienstes, die im Verkehrskreis Nautische Information betrieben wird",
          fr: "Une station mobile du service mobile maritime, qui est exploitée sur le réseau des informations nautiques"
        },
        correct: false
      }
    ]
  },
  // Frage 25
  {
    question: {
      de: "Wer darf eine Schiffsfunkstelle bedienen?",
      fr: "Qui peut exploiter une station de bateau?"
    },
    answers: [
      {
        text: {
          de: "Inhaber eines gültigen Sprechfunkzeugnisses für den Binnenschifffahrtsfunk oder eines gleichwertigen Zeugnisses",
          fr: "Titulaire d'un certificat d'opérateur radiotéléphonique sur les voies de navigation intérieures valide ou d’un certificat équivalent"
        },
        correct: true
      },
      {
        text: {
          de: "Personen, die ohne Aufsicht eines Funkzeugnisinhabers am Funkverkehr teilnehmen, sofern sie älter als 16 Jahre sind",
          fr: "Des personnes qui sans surveillance d'une personne, titulaire d'un certificat d'opérateur, participent au trafic radiotéléphonique à condition qu'elles soient âgées de plus de 16 ans"
        },
        correct: false
      },
      {
        text: {
          de: "Nur der Schiffsführer, wenn er über ein gültiges Sprechfunkzeugnis für den Binnenschifffahrtsfunk verfügt",
          fr: "Seul le skipper s'il dispose d'un certificat d'opérateur radiotéléphonique pour les voies de navigation intérieures valide"
        },
        correct: false
      },
      {
        text: {
          de: "Personen, die über einen Sportbootführerschein und über die Erlaubnis des Schiffsführers verfügen",
          fr: "Des personnes qui sont en possession d'un permis de navigation de sport valable et sur autorisation du capitaine"
        },
        correct: false
      }
    ]
  },
  // Frage 26
  {
    question: {
      de: "Wer stellt in Luxembourg die Lizenz für eine Schiffsfunkstelle aus?",
      fr: "Qui délivre au Luxembourg la licence pour une station de bateau ?"
    },
    answers: [
      {
        text: {
          de: "Die luxemburgische Regulierungsbehörde (ILR)",
          fr: "L´Institut Luxembourgeois de Régulation (ILR)"
        },
        correct: true
      },
      {
        text: {
          de: "Das luxemburgische Kommissariat für maritime Angelegenheiten (CAM)",
          fr: "Le Commissariat luxembourgeois aux affaires maritimes (CAM)"
        },
        correct: false
      },
      {
        text: {
          de: "Das Transportministerium",
          fr: "Le ministère de transports"
        },
        correct: false
      },
      {
        text: {
          de: "Das luxemburgische Wasserwirtschaftsamt",
          fr: "L'Administration de la gestion de l’eau"
        },
        correct: false
      }
    ]
  },
  // Frage 28
  {
    question: {
      de: "Die Bedienung einer Schiffsfunkstelle ohne Erlaubnis (UKW-Sprechfunkzeugnis) verstößt gegen die Vorschriften…",
      fr: "L'exploitation d'une station de bateau sans certificat d'opérateur valable (Certificat d'opérateur radiotéléphonique VHF) viole les règles…"
    },
    answers: [
      {
        text: {
          de: "des Gesetzes über die Frequenzorganisation.",
          fr: "de la loi grand-ducale portant organisation sur les fréquences."
        },
        correct: true
      },
      {
        text: {
          de: "der Binnenschifffahrtstraßenordnung.",
          fr: "du règlement de circulation sur les voies de navigation intérieures."
        },
        correct: false
      },
      {
        text: {
          de: "des Gesetzes über elektronische Kommunikations-Netze und -Dienste.",
          fr: "de la loi sur les réseaux et les services de communications électroniques."
        },
        correct: false
      },
      {
        text: {
          de: "der Binnenschifffahrt-Sprechfunkverordnung.",
          fr: "du règlement sur le service radiotéléphonique sur les voies de navigation intérieures."
        },
        correct: false
      }
    ]
  },
  // Frage 29
  {
    question: {
      de: "Welches Dokument muss sich nicht an Bord einer Schiffsfunkstelle befinden?",
      fr: "Quel document ne doit pas se trouver à bord d’une station de bateau?"
    },
    answers: [
      {
        text: {
          de: "die Schifffunklizenz",
          fr: "La licence de station de bateau"
        },
        correct: false
      },
      {
        text: {
          de: "das UKW-Sprechfunkzeugnis",
          fr: "Le certificat d'opérateur radiotéléphonique VHF"
        },
        correct: false
      },
      {
        text: {
          de: "das UKW-Betriebszeugnis",
          fr: "Le certificat d'opérateur restreint"
        },
        correct: true
      },
      {
        text: {
          de: "das Immatrikulationzertifikat des Schiffes",
          fr: "Le certificat d'immatriculation du bateau"
        },
        correct: false
      }
    ]
  },
  // Frage 30
  {
    question: {
      de: "Die Überprüfung einer Schiffsfunkstelle wird durchgeführt von...",
      fr: "La vérification d'une station de bateau est effectuée par..."
    },
    answers: [
      {
        text: {
          de: "der luxemburgischen Regulierungsbehörde (ILR)",
          fr: "l´Institut Luxembourgeois de Régulation (ILR)"
        },
        correct: true
      },
      {
        text: {
          de: "dem luxemburgischen Kommissariat für maritime Angelegenheiten (CAM)",
          fr: "le Commissariat luxembourgeois aux affaires maritimes (CAM)"
        },
        correct: false
      },
      {
        text: {
          de: "dem Transportministerium",
          fr: "le Ministère de transports"
        },
        correct: false
      },
      {
        text: {
          de: "das luxemburgische Wasserwirtschaftsamt.",
          fr: "l'Administration de la gestion de l’eau"
        },
        correct: false
      }
    ]
  },
  // Frage 31
  {
    question: {
      de: "Wer ist bei Eignerwechsel eines Binnenschiffes in Bezug auf die Schiffsfunkstelle zu benachrichtigen?",
      fr: "Qui doit être informé en cas de changement de proprietaire d'un bateau en relation avec la station de bateau?"
    },
    answers: [
      {
        text: {
          de: "Die luxemburgische Regulierungsbehörde (ILR)",
          fr: "L´Institut Luxembourgeois de Régulation (ILR)"
        },
        correct: true
      },
      {
        text: {
          de: "Das luxemburgische Kommissariat für maritime Angelegenheiten (CAM)",
          fr: "Le Commissariat luxembourgeois aux affaires maritimes (CAM)"
        },
        correct: false
      },
      {
        text: {
          de: "Das Transportministerium",
          fr: "Le Ministère de transports"
        },
        correct: false
      },
      {
        text: {
          de: "Das luxemburgische Wasserwirtschaftsamt",
          fr: "L'Administration de la gestion de l’eau"
        },
        correct: false
      }
    ]
  },
  // Frage 32
  {
    question: {
      de: "Wer ist bei technischen Änderungen an einer Schiffsfunkstelle schriftlich zu informieren?",
      fr: "Qui doit être prévenu par écrit en cas de changements techniques d'une station de navire?"
    },
    answers: [
      {
        text: {
          de: "Die luxemburgische Regulierungsbehörde (ILR)",
          fr: "L´Institut Luxembourgeois de Régulation (ILR)"
        },
        correct: true
      },
      {
        text: {
          de: "Das luxemburgische Kommissariat für maritime Angelegenheiten (CAM)",
          fr: "Le Commissariat luxembourgeois aux affaires maritimes (CAM)"
        },
        correct: false
      },
      {
        text: {
          de: "Das Transportministerium",
          fr: "Le Ministère de transports"
        },
        correct: false
      },
      {
        text: {
          de: "Das luxemburgische Wasserwirtschaftsamt",
          fr: "L'Administration de la gestion de l’eau"
        },
        correct: false
      }
    ]
  },
  // Frage 33
  {
    question: {
      de: "Was bedeutet die Betriebsart „Simplex”?",
      fr: "Was bedeutet die Betriebsart „Simplex”?"
    },
    answers: [
      {
        text: {
          de: "Wechselsprechen",
          fr: "Wechselsprechen"
        },
        correct: true
      },
      {
        text: {
          de: "Gegensprechen",
          fr: "Gegensprechen"
        },
        correct: false
      },
      {
        text: {
          de: "Sprechen über Ober- und Unterband",
          fr: "Sprechen über Ober- und Unterband"
        },
        correct: false
      },
      {
        text: {
          de: "Sprechen mit einem Funkgerät",
          fr: "Sprechen mit einem Funkgerät"
        },
        correct: false
      }
    ]
  },
  // Frage 34
  {
    question: {
      de: "Welche Teile des Handbuchs Binnenschifffahrtsfunk müssen bei einer Schiffsfunkstelle mitgeführt werden?",
      fr: "Quelles parties du guide pour le service de radiotéléphonie sur les voies de navigation intérieures doivent être emportées sur la station de bateau?"
    },
    answers: [
      {
        text: {
          de: "Allgemeiner Teil sowie Regionale Teile für die Strecken, auf denen die Schiffsfunkstelle am Binnenschifffahrtsfunk teilnimmt",
          fr: "La partie générale ainsi que les parties régionales pour les routes où la station de bateau participe au service radiotéléphonique sur les voies de navigation intérieures"
        },
        correct: true
      },
      {
        text: {
          de: "Regionale Teile für die Strecke, auf der sich die Schiffsfunkstelle gerade befindet",
          fr: "La partie régionale pour la route sur laquelle se trouve actuellement la station de bateau"
        },
        correct: false
      },
      {
        text: {
          de: "Regionale Teile für alle europäischen Wasserstraßen",
          fr: "Les parties régionales pour les voies de navigation européennes"
        },
        correct: false
      },
      {
        text: {
          de: "Allgemeiner Teil sowie Regionale Teile des Landes, auf denen die Schiffsfunkstelle angemeldet wurde",
          fr: "La partie générale ainsi que les parties régionales où la station de bateau a été enregistrée"
        },
        correct: false
      }
    ]
  },
  // Frage 35
  {
    question: {
      de: "Woraus besteht das Rufzeichen einer luxemburgischen Schiffsfunkstelle?",
      fr: "Comment est formé l'indicatif d'appel d'une station de bateau luxembourgeoise?"
    },
    answers: [
      {
        text: {
          de: "Zwei Buchstaben der Rufzeichenreihe für Luxemburg, gefolgt von vier Zahlen",
          fr: "Deux lettres de la série des indicatifs d'appel pour le Luxembourg, suivi de quatre chiffres"
        },
        correct: true
      },
      {
        text: {
          de: "Vier Buchstaben der Rufzeichenreihe für Luxemburg, gefolgt von vier Zahlen",
          fr: "Quatre lettres de la série des indicatifs d'appel pour le Luxembourg, suivi de quatre chiffres"
        },
        correct: false
      },
      {
        text: {
          de: "Zwei Buchstaben der Rufzeichenreihe für Luxemburg, gefolgt von zwei Zahlen",
          fr: "Deux lettres de la série des indicatifs d'appel pour le Luxembourg, suivi de deux chiffres"
        },
        correct: false
      },
      {
        text: {
          de: "Vier Buchstaben der Rufzeichenreihe für Luxemburg, gefolgt von zwei Zahlen",
          fr: "Quatre lettres de la série des indicatifs d'appel pour le Luxembourg, suivi de deux chiffres"
        },
        correct: false
      }
    ]
  },
  // Frage 36
  {
    question: {
      de: "Welches der nachfolgend angegebenen Rufzeichen kennzeichnet eine Schiffsfunkstelle?",
      fr: "Lequel des indicatifs d'appel énumérés ci-dessous identifie une station de bateau?"
    },
    answers: [
      {
        text: {
          de: "LX 2005",
          fr: "LX 2005"
        },
        correct: true
      },
      {
        text: {
          de: "LX BC ",
          fr: "LX BC "
        },
        correct: false
      },
      {
        text: {
          de: "LX AA 2",
          fr: "LX AA 2"
        },
        correct: false
      },
      {
        text: {
          de: "LG 5059",
          fr: "LX 5059"
        },
        correct: false
      }
    ]
  },
  // Frage 37
  {
    question: {
      de: "Was bedeutet „ATIS“?",
      fr: "Qu'est-ce que « ATIS » ?"
    },
    answers: [
      {
        text: {
          de: "Automatisches Senderidentifizierungssystem",
          fr: "Un système d'identification automatique de l'émetteur"
        },
        correct: true
      },
      {
        text: {
          de: "Automatisches Schiffsidentifizierungssystem",
          fr: "Un système d'identification automatique pour les bateaux"
        },
        correct: false
      },
      {
        text: {
          de: "Automatisches Verkehrsinformationssystem",
          fr: "Un système automatique d'information sur le trafic"
        },
        correct: false
      },
      {
        text: {
          de: "Automatisches Transponderabfragesystem",
          fr: "Un système d'interrogation automatique des transpondeurs"
        },
        correct: false
      }
    ]
  },
  // Frage 38
  {
    question: {
      de: "Welchem Zweck dient die Aussendung des ATIS-Codes?",
      fr: "Quel est l'objectif de la transmission du code ATIS ?"
    },
    answers: [
      {
        text: {
          de: "Identifizierung einer Schiffsfunkstelle",
          fr: "L'identification de la station de bateau"
        },
        correct: true
      },
      {
        text: {
          de: "Identifizierung einer Seefunkstelle",
          fr: "L'identification de la station de navire"
        },
        correct: false
      },
      {
        text: {
          de: "Identifizierung des Bedieners der Schiffsfunkstelle",
          fr: "L'identification de l'opérateur de la station de bateau"
        },
        correct: false
      },
      {
        text: {
          de: "Identifizierung des Verkehrskreises",
          fr: "L'identification du réseau"
        },
        correct: false
      }
    ]
  },
  // Frage 39
  {
    question: {
      de: "Wie setzt sich ein ATIS-Code zusammen?",
      fr: "Comment se compose un code ATIS?"
    },
    answers: [
      {
        text: {
          de: "Aus 10 Zahlen: die Zahl 9, der dreistelligen Landeskenner (MID) und 6 Zahlen",
          fr: "De 10 chiffres: du chiffre 9, de l’identificateur du pays à trois chiffres (MID) et de 6 chiffres"
        },
        correct: true
      },
      {
        text: {
          de: "Aus 10 Zahlen: der dreistelligen Seefunkkennzahl (MID) und 6 Zahlen",
          fr: "De 10 chiffres: de l’identificateur du pays à trois chiffres (MID) et de 6 chiffres"
        },
        correct: false
      },
      {
        text: {
          de: "Aus 10 Zahlen: der Zahl 9, zwei Nullen, der dreistelligen Seefunkkennzahl (MID) und 4 Zahlen",
          fr: "De 10 chiffres: du chiffre 9, deux zéros, de l’identificateur du pays à trois chiffres (MID) et de 4 chiffres"
        },
        correct: false
      },
      {
        text: {
          de: "Aus 10 Zahlen: zwei Nullen, der dreistelligen Seefunkkennzahl (MID) und 5 Zahlen",
          fr: "De 10 chiffres: deux zéros, de l’identificateur du pays à trois chiffres (MID) et de 5 chiffres"
        },
        correct: false
      }
    ]
  },
  // Frage 40
  {
    question: {
      de: "Wann wird das ATIS-Signal ausgesendet?",
      fr: "Quand le signal ATIS est-il transmis?"
    },
    answers: [
      {
        text: {
          de: "Nach dem Loslassen der Sprechtaste",
          fr: "Après avoir relâché le bouton PTT"
        },
        correct: true
      },
      {
        text: {
          de: "Beim Drücken der Sprechtaste",
          fr: "En appuyant sur le bouton PTT"
        },
        correct: false
      },
      {
        text: {
          de: "Alle 10 Minuten",
          fr: "Toutes les 10 minutes"
        },
        correct: false
      },
      {
        text: {
          de: "Bei Kanalwechsel",
          fr: "Lors d’un changement de canal"
        },
        correct: false
      }
    ]
  },
  // Frage 41
  {
    question: {
      de: "Welchen ATIS-Code sendet eine tragbare Funkanlage aus?",
      fr: "Quel est le code ATIS transmis par une station radiotéléphonique portable?"
    },
    answers: [
      {
        text: {
          de: "ATIS-Code der Schiffsfunkstelle, zu der sie gehört",
          fr: "Code ATIS de la station de bateau, à laquelle elle appartient"
        },
        correct: true
      },
      {
        text: {
          de: "ATIS-Code, der ihr gesondert von der Frequenzzuteilung zugewiesen wurde",
          fr: "Code ATIS qui lui a été assigné séparément à la licence de station de navire"
        },
        correct: false
      },
      {
        text: {
          de: "ATIS-Code der ortsfesten Funkstelle",
          fr: "Code ATIS de la station fixe terrestre"
        },
        correct: false
      },
      {
        text: {
          de: "ATIS-Code der Schiffsfunkstelle und die Gerätenummer",
          fr: "Code ATIS de la station de bateau et le numéro de série de l'équipement"
        },
        correct: false
      }
    ]
  },
  // Frage 42
  {
    question: {
      de: "Wie lautet das Sicherheitszeichen im Sprechfunk?",
      fr: "Qu'est-ce qu'un \"ATIS-killer\"?"
    },
    answers: [
      {
        text: {
          de: "SECURITE",
          fr: "Dispositif supplémentaire dans l’installation radioélectrique pour la suppression acoustique du code ATIS reçu"
        },
        correct: true
      },
      {
        text: {
          de: "MAYDAY",
          fr: "Dispositif supplémentaire dans l’installation radioélectrique pour la suppression optique du code ATIS reçu"
        },
        correct: false
      },
      {
        text: {
          de: "PAN PAN",
          fr: "Dispositif supplémentaire dans l’installation radioélectrique pour supprimer la transmission accidentelle du code ATIS"
        },
        correct: false
      },
      {
        text: {
          de: "SOS",
          fr: "Dispositif supplémentaire dans l’installation radioélectrique pour supprimer la transmission du code ATIS"
        },
        correct: false
      }
    ]
  },
  // Frage 43
  {
    question: {
      de: "Was versteht man unter „AIS“?",
      fr: "Qu'est qu'on entend par \"AIS\"?"
    },
    answers: [
      {
        text: {
          de: "Automatisches Schiffsidentifizierungs- und Überwachungssystem, das statische, dynamische und reisebezogene Informationen auf UKW übermittelt",
          fr: "Système automatique d'identification et de surveillance des navires, transmettant sur VHF des informations statiques, dynamiques et liées au voyage"
        },
        correct: true
      },
      {
        text: {
          de: "Allgemeines Informationssystem für die Binnenschifffahrt",
          fr: "Système général d'information pour la navigation intérieure"
        },
        correct: false
      },
      {
        text: {
          de: "Automatische Aussendung der Kennung eines Binnenschifffahrtschiffes beim Loslassen der Sprechtaste",
          fr: "Transmission automatique de l'identité d'un bateau en libérant le bouton PTT"
        },
        correct: false
      },
      {
        text: {
          de: "Identifizierung eines Schiffes mit Hilfe von Radarpeilungen und deren Weitergabe an die Schifffahrt zur Kollisionsvermeidung",
          fr: "Identification du navire au moyen de repérages radar et leurs transmissions à l’industrie maritime pour éviter des collisions"
        },
        correct: false
      }
    ]
  },
  // Frage 44
  {
    question: {
      de: "Welche Informationen werden bei AIS automatisch ausgetauscht?",
      fr: "Quelles sont les informations qui sont automatiquement échangées sur AIS ?"
    },
    answers: [
      {
        text: {
          de: "Statische Informationen (z. B. Schiffsname), dynamische Informationen (z. B. Kurs) und reisebezogene Informationen (z. B. Bestimmungsort)",
          fr: "Informations statiques (ex. nom du navire), informations dynamiques (ex. la direction) et informations liées au voyage (ex. destination)"
        },
        correct: true
      },
      {
        text: {
          de: "Statische Informationen (z. B. Schiffsname), notfallbezogene Informationen (z. B. Notalarme) und reisebezogene Informationen (z. B. Bestimmungsort)",
          fr: "Informations statiques (ex. nom du navire), informations liées à la détresse (ex. alarmes d'urgence) et informations liées au voyage (ex. destination)"
        },
        correct: false
      },
      {
        text: {
          de: "Statische Informationen (z. B. Schiffsname), reisebezogene Informationen (z. B. Bestimmungsort) und dringende Informationen (z. B. Treibstoffmangel)",
          fr: "Informations statiques (ex. nom du navire), informations liées au voyage (ex. destination) et informations urgentes (ex. manque de carburant)"
        },
        correct: false
      },
      {
        text: {
          de: "Statische Informationen (z. B. Schiffsname), dynamische Informationen (z. B. Kurs) und notfallbezogene Informationen (z. B. Notalarme)",
          fr: "Informations statiques (ex. nom du navire), informations dynamiques (ex. la direction) et informations liées à la détresse (ex. alarmes d'urgence)"
        },
        correct: false
      }
    ]
  },
  // Frage 45
  {
    question: {
      de: "Welche UKW-Kanäle dürfen nicht von der Sportschiffsfahrt im Binnenfunk benutzt werden?",
      fr: "Quels  pour des \"communications de \"?"
    },
    answers: [
      {
        text: {
          de: "15 und 17",
          fr: "77 et canal local."
        },
        correct: true
      },
      {
        text: {
          de: "72 und 77.",
          fr: "15 et 17."
        },
        correct: false
      },
      {
        text: {
          de: "06 und 16",
          fr: "06 et 16."
        },
        correct: false
      },
      {
        text: {
          de: "18 und 22",
          fr: "20 et 22."
        },
        correct: false
      }
    ]
  },
  // Frage 46
  {
    question: {
      de: "Was bedeutet die Angabe „Betriebsspannung 10,8 – 14,6 V=“ in der Bedienungsanleitung einer Funkanlage?",
      fr: "Que signifie la spécification « Tension de fonctionnement V 10,8 à 14,6 = » dans le manuel d'utilisateur de l'équipement radioélectrique?"
    },
    answers: [
      {
        text: {
          de: "Es ist eine Gleichspannung zwischen 10,8 und 14,6 Volt für den Betrieb erforderlich.",
          fr: "Une tension continue comprise entre 10,8 et 14,6 volts est nécessaire pour le fonctionnement."
        },
        correct: true
      },
      {
        text: {
          de: "Es ist eine Wechselspannung zwischen 10,8 und 14,6 Volt für den Betrieb erforderlich.",
          fr: "Une tension alternative comprise entre 10,8 et 14,6 volts est nécessaire pour le fonctionnement."
        },
        correct: false
      },
      {
        text: {
          de: "Es ist eine Gleichspannung von 12,7 Volt (Mittelwert zwischen 10,8 und 14,6 Volt) für den Betrieb erforderlich.",
          fr: "Une tension continue de 12,7 volts (valeur moyenne entre 10,8 et 14,6 volts) est nécessaire pour le fonctionnement."
        },
        correct: false
      },
      {
        text: {
          de: "Es ist eine Wechselspannung von 12,7 Volt (Mittelwert von 10,8 bis 14,6 Volt) für den Betrieb notwendig.",
          fr: "Une tension alternative de 12,7 volts (valeur moyenne de 10,8 à 14,6 volts) est nécessaire pour le fonctionnement."
        },
        correct: false
      }
    ]
  },
  // Frage 47
  {
    question: {
      de: "Was ist beim Kauf eines UKW-Sprechfunkgerätes für den Binnenschifffahrtsfunk zu beachten?",
      fr: "Que faut-il prendre en considération lors de l'achat d'un équipement radioélectrique pour le service radiotéléphonique sur les voies de navigation intérieures?"
    },
    answers: [
      {
        text: {
          de: "Das Funkgerät muss zugelassen sein für die Teilnahme am Binnenschifffahrtsfunk.",
          fr: "L'équipement radioélectrique doit être conforme pour la participation au service radiotéléphonique sur les voies de navigation intérieures."
        },
        correct: true
      },
      {
        text: {
          de: "Das Funkgerät muss funktionsfähig sein.",
          fr: "L'équipement radioélectrique doit être opérationnel."
        },
        correct: false
      },
      {
        text: {
          de: "Das Funkgerät muss für die Teilnahme am Binnenschifffahrtsfunk eine ATIS-Schnittstelle besitzen und Wetterberichte empfangen können.",
          fr: "L'équipment radioélectrique doit disposer d’une interface ATIS et doit être capable de recevoir des rapports météorologiques pour participer au service radiotéléphonique sur les voies de navigation intérieures."
        },
        correct: false
      },
      {
        text: {
          de: "Das Funkgerät muss gemäß der Binnenschifffahrt-Sprechfunkverordnung für die Teilnahme am Binnenschifffahrtsfunk zugelassen sein.",
          fr: "L'équipement radioélectrique doit être agréé conformément au règlement sur la radiotéléphonie sur les voies de navigation intérieures pour la participation au service radiotéléphonique sur les voies de navigation intérieures."
        },
        correct: false
      }
    ]
  },
  // Frage 49
  {
    question: {
      de: "Bei einer Beschädigung der äußeren Isolierung (Mantel) des Antennenkabels sollte das Antennenkabel…",
      fr: "Si l'isolation extérieure (gaine) du câble d'antenne est endommagée, le câble d'antenne doit …."
    },
    answers: [
      {
        text: {
          de: "umgehend erneuert werden.",
          fr: "être remplacé immédiatement."
        },
        correct: true
      },
      {
        text: {
          de: "bei Gelegenheit erneuert werden.",
          fr: "être renouvelé à l'occasion."
        },
        correct: false
      },
      {
        text: {
          de: "alternativ durch ein Stromkabel ersetzt werden.",
          fr: "être remplacé alternativement par un câble électrique."
        },
        correct: false
      },
      {
        text: {
          de: "bei Gelegenheit gegen eindringende Feuchtigkeit gesichert werden.",
          fr: "être protégé contre la pénétration de l'humidité à l’occasion."
        },
        correct: false
      }
    ]
  },
  // Frage 50
  {
    question: {
      de: "Eine Schiffsfunkstelle empfängt auf allen UKW-Kanälen nur starkes Rauschen. Was könnte die mögliche Ursache für die Störung sein?",
      fr: "Une station de navire ne reçoit que du bruit fort dans tous les canaux VHF. Quelle pourrait être la cause possible de la perturbation?"
    },
    answers: [
      {
        text: {
          de: "Die Antenne oder das Antennenkabel sind möglicherweise beschädigt.",
          fr: "L'antenne ou le câble d'antenne sont vraisemblablement endommagés."
        },
        correct: true
      },
      {
        text: {
          de: "Der Empfang wird durch atmosphärische Störungen beeinträchtigt.",
          fr: "La réception est affectée par les perturbations atmosphériques."
        },
        correct: false
      },
      {
        text: {
          de: "Eine unbeabsichtigte Aussendung einer anderen Schiffsfunkstelle blockiert die UKW-Kanäle.",
          fr: "Une transmission involontaire d'une autre station de navire bloque les canaux VHF."
        },
        correct: false
      },
      {
        text: {
          de: "Die Funkantenne wurde zu nah an der Radarantenne angebracht.",
          fr: "L'antenne radio était placée trop près de l'antenne radar."
        },
        correct: false
      }
    ]
  },
  // Frage 51
  {
    question: {
      de: "Worauf ist beim Austausch einer defekten UKW-Antenne bei einer Schiffsfunkstelle durch eine Ersatzantenne zu achten?",
      fr: "Que faut-il prendre en considération lors du remplacement d'une antenne VHF défectueuse d’une station de navire par une antenne de remplacement ?"
    },
    answers: [
      {
        text: {
          de: "Die Ersatzantenne muss für den UKW-Frequenzbereich des Binnenschifffahrtsfunks ausgelegt sein.",
          fr: "L'antenne de rechange doit être conçue für la gamme de fréquences VHF du service radiotéléphonique sur les voies de navigation intérieures."
        },
        correct: true
      },
      {
        text: {
          de: "Die Ersatzantenne muss wettergeschützt angebracht werden.",
          fr: "L'antenne de rechange doit être installée dans un endroit à l'abri des intempéries."
        },
        correct: false
      },
      {
        text: {
          de: "Die Ersatzantenne muss außerhalb des Abdeckungsbereichs des Radars angebracht werden.",
          fr: "L'antenne de rechange doit être placée en dehors de la zone de couverture du radar."
        },
        correct: false
      },
      {
        text: {
          de: "Die Ersatzantenne muss am höchsten Punkt des Fahrzeugs angebracht werden.",
          fr: "L'antenne de rechange doit être installée au point le plus haut du véhicule."
        },
        correct: false
      }
    ]
  },
  // Frage 53
  {
    question: {
      de: "Wozu dient ein „Verkehrskreis” im Binnenschifffahrtsfunk?",
      fr: "Quel est l'objectif d'un « réseau » dans le service radiotéléphonique sur les voies de navigation interieure?"
    },
    answers: [
      {
        text: {
          de: "Zuordnung von Sprechfunk-Kanälen für bestimmte Zwecke.",
          fr: "Assignation de canaux radiotéléphoniques à des fins spécifiques."
        },
        correct: true
      },
      {
        text: {
          de: "Zuordnung von Sprechfunk-Kanälen für bestimmte Schiffsfunkstellen.",
          fr: "Assignation de canaux radiotéléphoniques à des stations de bateau spécifiques."
        },
        correct: false
      },
      {
        text: {
          de: "Zuordnung der Rangfolge von bestimmten Arten von Funkgesprächen.",
          fr: "Classement de la priorité pour certains types de communications radiotéléphoniques."
        },
        correct: false
      },
      {
        text: {
          de: "Zuordnung von Sprechfunk-Rufzeichen für bestimmte Funkstellen.",
          fr: "Assignation d'indicatifs d'appel à certaines stations radiotéléphoniques."
        },
        correct: false
      }
    ]
  },
  // Frage 54
  {
    question: {
      de: "Welche Verkehrskreise werden im Binnenschifffahrtsfunk betrieben?",
      fr: "Quels sont les réseaux exploités dans le service radiotéléphonique sur les voies de navigation intérieures?"
    },
    answers: [
      {
        text: {
          de: "Schiff – Schiff, Nautische Information, Schiff – Hafenbehörde, Funkverkehr an Bord.",
          fr: "Bateau-bateau, informations nautiques, bateau-autorités portuaires, communications à bord."
        },
        correct: true
      },
      {
        text: {
          de: "Schiff – Schiff, Schiff - Verkehrszentrale, Schiff – Hafenbehörde, Funkverkehr an Bord.",
          fr: "Bateau-bateau, bateau-central trafic, bateau-autorités portuaires, communications à bord."
        },
        correct: false
      },
      {
        text: {
          de: "Schiff – Schiff, Nautische Information, Schiff – Hafenbehörde, Schiff – Verkehrsposten.",
          fr: "Bateau-bateau, informations nautiques, bateau-autorités portuaires, bateau-postes de trafic."
        },
        correct: false
      },
      {
        text: {
          de: "Schiff – Schiff, Nautische Information, Schiff – Hafenbehörde, Schiff - Landfunkstelle.",
          fr: "Bateau-bateau, informations nautiques, bateau-autorités portuaires, bateau-station terrestre."
        },
        correct: false
      }
    ]
  },
  // Frage 55
  {
    question: {
      de: "Wo findet man Angaben über Verkehrskreise des Binnenschifffahrtsfunks?",
      fr: "Où trouve-t-on des informations sur les réseaux du service radiotéléphonique sur les voies de navigation intérieures ?"
    },
    answers: [
      {
        text: {
          de: "Regionale Vereinbarung über den Binnenschifffahrtsfunk (RAINWAT).",
          fr: "Arrangement régional relatif au service de radiocommunications sur les voies de navigation intérieures (RAINWAT)."
        },
        correct: true
      },
      {
        text: {
          de: "Regionaler Teil für Luxemburg des Handbuchs Binnenschifffahrtsfunk.",
          fr: "Dans la partie régionale pour le Luxembourg du guide sur le service radiotéléphonique sur les voies de navigation intérieures."
        },
        correct: false
      },
      {
        text: {
          de: "Gesetz über Funkanlagen und Telekommunikationseinrichtungen.",
          fr: "Loi sur les équipements radioélectriques et de télécommunications."
        },
        correct: false
      },
      {
        text: {
          de: "Binnenschifffahrtsstraßenordnung.",
          fr: "Réglement grand-ducal sur les voies de navigation intérieures."
        },
        correct: false
      }
    ]
  },
  // Frage 56
  {
    question: {
      de: "Wozu dient der Verkehrskreis „Schiff – Schiff“?",
      fr: "À quoi sert le réseau \"bateau-bateau\" ?"
    },
    answers: [
      {
        text: {
          de: "Funkverkehr zwischen Schiffsfunkstellen.",
          fr: "Radiocommunications entre des stations de bateau."
        },
        correct: true
      },
      {
        text: {
          de: "Funkverkehr zwischen Schiffsfunkstellen und Funkstellen der Behörden.",
          fr: "Radiocommunications entre des stations de bateau et les stations des autorités responsables."
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr von Schiffsfunkstellen über Landfunkstellen mit dem öffentlichen Telekommunikationsnetz.",
          fr: "Radiocommunications entre des stations de bateau via des stations terrestres avec le réseau public de télécommunications."
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr zwischen Handfunkgeräten auf einem Schiff.",
          fr: "Radiocommunications entre équipements radioélectriques portatifs à bord d’un bateau."
        },
        correct: false
      }
    ]
  },
  // Frage 57
  {
    question: {
      de: "Welche Nachrichten werden im Verkehrskreis „Schiff – Schiff“ übermittelt?",
      fr: "Quels messages sont transmis sur le réseau \"bateau-bateau\"?"
    },
    answers: [
      {
        text: {
          de: "Nachrichten, die sich auf den Schutz von Personen oder auf die Fahrt oder auf die Sicherheit von Schiffen beziehen.",
          fr: "Des messages relatifs à la protection de personnes ou à la navigation ou à la sécurité du bateau."
        },
        correct: true
      },
      {
        text: {
          de: "Nachrichten über den Zustand der Wasserstraßen, über Verkehrsberatung und zur Verkehrslenkung.",
          fr: "Des avis sur l'état des voies de navigation intérieures, sur la gestion et le guidage du trafic."
        },
        correct: false
      },
      {
        text: {
          de: "Nachrichten über die Zuweisung von Liegeplätzen oder über die Fahrt in den Häfen.",
          fr: "Messages relatifs à l’attribution de places d’amarrage ou relatifs à la navigation portuaire."
        },
        correct: false
      },
      {
        text: {
          de: "Nachrichten über schiffsbetriebliche Angelegenheiten.",
          fr: "Messages sur des questions opérationnelles relatifs à la sécurité des bateaux."
        },
        correct: false
      }
    ]
  },
  // Frage 58
  {
    question: {
      de: "Welche Funkstelle ist nicht dem Verkehrskreis „Schiff-Schiff“ zugeordnet?",
      fr: "Quelle station n'est pas affectée au réseau \"bateau-bateau\"?"
    },
    answers: [
      {
        text: {
          de: "Grevenmacher Schleuse.",
          fr: "Grevenmacher écluse."
        },
        correct: true
      },
      {
        text: {
          de: "Segelyacht Robbe LX2345.",
          fr: "Bateau à voile Robbe LX2345."
        },
        correct: false
      },
      {
        text: {
          de: "Speyer Fähre.",
          fr: "Speyer Ferry."
        },
        correct: false
      },
      {
        text: {
          de: "MS Mainz.",
          fr: "Navire à moteur Mainz."
        },
        correct: false
      }
    ]
  },
  // Frage 59
  {
    question: {
      de: "Welche Funkstelle kann am Verkehrskreis „Schiff-Schiff“ teilnehmen?",
      fr: "Quelle station peut participer au réseau \"bateau-bateau\" ?"
    },
    answers: [
      {
        text: {
          de: "Segelyacht Robbe LX2345.",
          fr: "Bateau à voile Robbe LX2345."
        },
        correct: true
      },
      {
        text: {
          de: "Grevenmacher Schleuse.",
          fr: "Grevenmacher Ecluse."
        },
        correct: false
      },
      {
        text: {
          de: "Mertert Hafen.",
          fr: "Mertert Port."
        },
        correct: false
      },
      {
        text: {
          de: "Oberwesel Revierzentrale.",
          fr: "Oberwesel centrale de réseau."
        },
        correct: false
      }
    ]
  },
  // Frage 60
  {
    question: {
      de: "Wozu dient der Verkehrskreis „Nautische Information“?",
      fr: "À quoi sert le réseau \"informations nautiques\"?"
    },
    answers: [
      {
        text: {
          de: "Funkverkehr zwischen Schiffsfunkstellen und Funkstellen der Behörden, denen der Betrieb der Wasserstraßen in Luxemburg obliegt.",
          fr: "Radiocommunications entre stations de bateau et les stations des autorités, chargées de l'exploitation des voies de navigation intérieures au Luxembourg."
        },
        correct: true
      },
      {
        text: {
          de: "Funkverkehr von Schiffsfunkstellen über Landfunkstellen mit dem öffentlichen Telekommunikationsnetz.",
          fr: "Radiocommunications entre des stations de bateau via des stations terrestres avec le réseau public de télécommunications."
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr zwischen Schiffsfunkstellen.",
          fr: "Radiocommunications entre des stations de bateau."
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr zwischen Schiffsfunkstellen und Landfunkstellen von Hafenbehörden.",
          fr: "Radiocommunication entre stations de bateau et les stations terrestre des autorités portuaires."
        },
        correct: false
      }
    ]
  },
  // Frage 61
  {
    question: {
      de: "Welche Nachrichten werden im Verkehrskreis „Nautische Information” übermittelt?",
      fr: "Quels messages sont transmis sur le réseau « Informations nautiques »?"
    },
    answers: [
      {
        text: {
          de: "Nachrichten über den Zustand der Wasserstraßen, über Verkehrsberatung und zur Verkehrslenkung.",
          fr: "Messages sur l'état des voies de navigation intérieures, sur la gestion et le guidage du trafic."
        },
        correct: true
      },
      {
        text: {
          de: "Nachrichten über die Zuweisung von Liegeplätzen oder über die Fahrt in den Häfen.",
          fr: "Avis concernant l'attribution de places d'amarrage ou la navigation dans les ports."
        },
        correct: false
      },
      {
        text: {
          de: "Nachrichten, die sich auf Funkverkehr zwischen Schiffsfunkstellen beziehen.",
          fr: "Messages relatifs aux radiocommunications entre stations de bateau."
        },
        correct: false
      },
      {
        text: {
          de: "Nachrichten über schiffsbetriebliche Angelegenheiten.",
          fr: "Messages sur des questions opérationnelles des bateaux."
        },
        correct: false
      }
    ]
  },
  // Frage 62
  {
    question: {
      de: "Wodurch kann bei einem nicht funkausrüstungspflichtigen Fahrzeug die ununterbrochene Teilnahme am Verkehrskreis „Nautische Information” sichergestellt werden?",
      fr: "Par quel moyen peut-on assurer la participation en continu sur le réseau « Informations nautiques » sur un bateau non soumis à l'obligation d’être équipé des équipements radioélectriques?"
    },
    answers: [
      {
        text: {
          de: "Zusätzliche UKW-Funkanlage für den Binnenschifffahrtsfunk.",
          fr: "Un équipement radiotéléphonique VHF supplémentaire pour les voies de navigation intérieures."
        },
        correct: true
      },
      {
        text: {
          de: "Zweikanalüberwachung (Dual Watch).",
          fr: "Surveillance simultanée de deux canaux (Dual Watch)."
        },
        correct: false
      },
      {
        text: {
          de: "Ununterbrochene Empfangsbereitschaft auf Kanal 10.",
          fr: "Une surveillance en continu de la voie 10."
        },
        correct: false
      },
      {
        text: {
          de: "Einschalten des Kanals der Funkstelle der zuständigen Hafenbehörde.",
          fr: "Réglage du canal sur une station de l'autorité portuaire compétente."
        },
        correct: false
      }
    ]
  },
  // Frage 63
  {
    question: {
      de: "Welche Funkstelle ist nicht dem Verkehrskreis „Nautische Information“ zugeordnet?",
      fr: "Quelle station n'est pas affectée au réseau « Informations nautiques »?"
    },
    answers: [
      {
        text: {
          de: "Mertert Hafen.",
          fr: "Mertert Port."
        },
        correct: true
      },
      {
        text: {
          de: "Grevenmacher Schleuse.",
          fr: "Grevenmacher Ecluse."
        },
        correct: false
      },
      {
        text: {
          de: "Gerstheim Schleuse.",
          fr: "Gerstheim Ecluse."
        },
        correct: false
      },
      {
        text: {
          de: "Oberwesel Revierzentrale.",
          fr: "Oberwesel Centrale du réseau."
        },
        correct: false
      }
    ]
  },
  // Frage 64
  {
    question: {
      de: "Welche Funkstelle ist dem Verkehrskreis „Nautische Information“ zugeordnet?",
      fr: "Quelle station est affectée au réseau « Informations nautiques »?"
    },
    answers: [
      {
        text: {
          de: "Grevenmacher Schleuse.",
          fr: "Grevenmacher Ecluse."
        },
        correct: true
      },
      {
        text: {
          de: "Mertert Hafen.",
          fr: "Mertert Port."
        },
        correct: false
      },
      {
        text: {
          de: "Diffenébrücke Mannheim.",
          fr: "Mannheim Pont Diffené."
        },
        correct: false
      },
      {
        text: {
          de: "Mannheim Hafenschleuse.",
          fr: "Mannheim Ecluse portuaire."
        },
        correct: false
      }
    ]
  },
  // Frage 65
  {
    question: {
      de: "Wozu dient der Verkehrskreis „Schiff – Hafenbehörde“?",
      fr: "À quoi sert le réseau « Bateau-autorités portuaires »?"
    },
    answers: [
      {
        text: {
          de: "Funkverkehr zwischen Schiffsfunkstellen und Landfunkstellen von Hafenbehörden.",
          fr: "Radiocommunications entre stations de bateau et les stations terrestres des autorités portuaires."
        },
        correct: true
      },
      {
        text: {
          de: "Funkverkehr von Schiffsfunkstellen über Landfunkstellen mit dem öffentlichen Telekommunikationsnetz.",
          fr: "Radiocommunications entre des stations de bateau via des stations terrestres avec le réseau public de télécommunications."
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr zwischen Schiffsfunkstellen in Häfen.",
          fr: "Radiocommunications entre stations de bateau dans les ports."
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr an Bord eines Schiffes oder innerhalb einer Gruppe von Schlepp- und Schubverbänden.",
          fr: "Radiocommunications à bord d'un bateau ou d'un groupe de bateaux à remorquer ou à pousser."
        },
        correct: false
      }
    ]
  },
  // Frage 66
  {
    question: {
      de: "Welche Nachrichten werden im Verkehrskreis „Schiff – Hafenbehörde” übermittelt?",
      fr: "Quels sont les messages transmis sur le réseau « Bateau-autorités portuaires »?"
    },
    answers: [
      {
        text: {
          de: "Nachrichten über die Zuweisung von Liegeplätzen oder über die Fahrt in den Häfen.",
          fr: "Avis concernant l'attribution de places d'amarrage ou la navigation dans les ports."
        },
        correct: true
      },
      {
        text: {
          de: "Nachrichten über den Zustand der Wasserstraßen, über Verkehrsberatung und zur Verkehrslenkung.",
          fr: "Messages sur l'état des voies de navigation intérieures, sur la gestion et le guidage du trafic."
        },
        correct: false
      },
      {
        text: {
          de: "Nachrichten, die sich auf Funkverkehr zwischen Schiffsfunkstellen beziehen.",
          fr: "Messages relatifs aux radiocommunications entre stations de bateaux."
        },
        correct: false
      },
      {
        text: {
          de: "Nachrichten über schiffsbetriebliche Angelegenheiten.",
          fr: "Avis sur des questions opérationnelles des bateaux."
        },
        correct: false
      }
    ]
  },
  // Frage 67
  {
    question: {
      de: "Welchem Verkehrskreis ist die Landfunkstelle Schwebsange Hafen zugeordnet?",
      fr: "À quel réseau est affectée la station terrestre Schwebsange Port?"
    },
    answers: [
      {
        text: {
          de: "Schiff – Hafenbehörde.",
          fr: "Bateau-autorité portuaire."
        },
        correct: true
      },
      {
        text: {
          de: "Schiff – Schiff.",
          fr: "Bateau-bateau."
        },
        correct: false
      },
      {
        text: {
          de: "Nautische Information.",
          fr: "Informations nautiques."
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr an Bord.",
          fr: "Radiocommunications de bord."
        },
        correct: false
      }
    ]
  },
  // Frage 68
  {
    question: {
      de: "Welche Funkstelle ist nicht dem Verkehrskreis „Schiff-Hafenbehörde“ zugeordnet?",
      fr: "Quelle station n'est pas affectée au réseau « Bateau-autorité portuaire »?"
    },
    answers: [
      {
        text: {
          de: "Grevenmacher Schleuse.",
          fr: "Grevenmacher Ecluse."
        },
        correct: true
      },
      {
        text: {
          de: "Mannheim Hafenschleuse.",
          fr: "Mannheim Ecluse portuaire."
        },
        correct: false
      },
      {
        text: {
          de: "Segelyacht Robbe LX2345.",
          fr: "Bateau à voile Robbe LX2345."
        },
        correct: false
      },
      {
        text: {
          de: "Mertert Hafen.",
          fr: "Mertert Port."
        },
        correct: false
      }
    ]
  },
  // Frage 69
  {
    question: {
      de: "Welche Funkstelle ist dem Verkehrskreis „Schiff-Hafenbehörde“ zugeordnet?",
      fr: "Quelle station est affectée au réseau « Bateau-autorité portuaire »?"
    },
    answers: [
      {
        text: {
          de: "Schwebsange Hafen.",
          fr: "Schwebsange Port."
        },
        correct: true
      },
      {
        text: {
          de: "Grevenmacher Schleuse.",
          fr: "Grevenmacher Ecluse."
        },
        correct: false
      },
      {
        text: {
          de: "Oberwesel Revierzentrale.",
          fr: "Oberwesel centrale de réseau."
        },
        correct: false
      },
      {
        text: {
          de: "Lauenburg Schleuse.",
          fr: "Lauenburg Ecluse."
        },
        correct: false
      }
    ]
  },
  // Frage 70
  {
    question: {
      de: "Wozu dient der Verkehrskreis „Funkverkehr an Bord“?",
      fr: "À quoi sert le réseau « Communications à bord »?"
    },
    answers: [
      {
        text: {
          de: "Funkverkehr an Bord eines Schiffes oder innerhalb einer Gruppe von Schlepp- und Schubverbänden.",
          fr: "Radiocommunications à bord d'un bateau ou d'un groupe de bateaux à remorquer ou à pousser."
        },
        correct: true
      },
      {
        text: {
          de: "Funkverkehr zwischen Schiffsfunkstellen und Landfunkstellen von Hafenbehörden.",
          fr: "Radiocommunications entre stations de bateau et les stations terrestres des autorités portuaires."
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr von Schiffsfunkstellen über Landfunkstellen mit dem öffentlichen Telekommunikationsnetz.",
          fr: "Radiocommunications entre des stations de bateau via des stations terrestres avec le réseau public de télécommunications."
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr zwischen Schiffsfunkstellen in Häfen.",
          fr: "Radiocommunications entre stations de bateau dans les ports."
        },
        correct: false
      }
    ]
  },
  // Frage 71
  {
    question: {
      de: "Welche Nachrichten werden im Verkehrskreis „Funkverkehr an Bord“ übermittelt?",
      fr: "Quels sont les messages transmis sur le réseau « Communications à bord »?"
    },
    answers: [
      {
        text: {
          de: "Interner Funkverkehr an Bord eines Schiffes oder Funkverkehr innerhalb einer Gruppe von Schiffen, ob geschleppt oder geschoben, sowie der Funkverkehr, der die Handhabung von Tauwerk und Anweisungen zum Anlegen betrifft.",
          fr: "Radiocommunications internes échangées à bord d'un bateau ou radiocommunications échangées au sein d'un groupe de bateaux, remorqués ou poussés, ainsi que celles concernant les instructions relatives à la manœuvre des aussières et à l'amarrage."
        },
        correct: true
      },
      {
        text: {
          de: "Nachrichten über die Zuweisung von Liegeplätzen oder über die Fahrt in den Häfen.",
          fr: "Avis concernant l'attribution de places d'amarrage ou la navigation dans les ports."
        },
        correct: false
      },
      {
        text: {
          de: "Nachrichten über den Zustand der Wasserstraßen, über Verkehrsberatung und zur Verkehrslenkung zwischen Schiffsfunkstellen und Landfunkstellen.",
          fr: "Messages sur l'état des voies de navigation intérieures, sur la gestion et le guidage du trafic entre stations de bateau et stations terrestres."
        },
        correct: false
      },
      {
        text: {
          de: "Nachrichten, die sich auf den Schutz von Personen und auf die Fahrt oder auf die Sicherheit von Schiffen beziehen.",
          fr: "Messages relatifs à la sécurité de personnes et au voyage ou la sécurité des bateaux."
        },
        correct: false
      }
    ]
  },
  // Frage 73
  {
    question: {
      de: "In welchem Verkehrskreis dürfen tragbare Funkanlagen in Luxemburg benutzt werden?",
      fr: "Dans quels réseaux les stations de bateau doivent-elles être sur veille à l'exception des véhicules de petite taille pendant le voyage ?"
    },
    answers: [
      {
        text: {
          de: "Funkverkehr an Bord.",
          fr: "Communications à bord."
        },
        correct: true
      },
      {
        text: {
          de: "Schiff - Hafenbehörde.",
          fr: "Bateau - Autorités portuaires."
        },
        correct: false
      },
      {
        text: {
          de: "Nautische Informationen.",
          fr: "Informations nautiques."
        },
        correct: false
      },
      {
        text: {
          de: "Schiff - Schiff.",
          fr: "Bateau - bateau."
        },
        correct: false
      }
    ]
  },
  // Frage 74
  {
    question: {
      de: "Welche Schiffe mit Schiffsfunkstellen dürfen nicht am Verkehrskreis „Funkverkehr an Bord” teilnehmen?",
      fr: "Quels bateaux équipés d’une station radioélectrique ne sont pas autorisés à participer au réseau \"communications à bord\" ?"
    },
    answers: [
      {
        text: {
          de: "Kleinfahrzeuge.",
          fr: "Bateaux de petite taille."
        },
        correct: true
      },
      {
        text: {
          de: "Schlepp- und Schubschiffe.",
          fr: "Bateaux de remorquage ou pousseur."
        },
        correct: false
      },
      {
        text: {
          de: "Behördenfahrzeuge.",
          fr: "Bateaux administratifs."
        },
        correct: false
      },
      {
        text: {
          de: "Fahrgastschiffe.",
          fr: "Bateaux à passagers."
        },
        correct: false
      }
    ]
  },
  // Frage 75
  {
    question: {
      de: "Welche Kennung müssen Schiffsfunkstellen in den Verkehrskreisen „Schiff - Schiff“, „Nautische Information“ und „Schiff - Hafenbehörde“ im Sprechfunkverkehr verwenden?",
      fr: "Quel identifiant les stations de bateau dans les réseaux « Bateau – bateau », « informations nautiques » et « bateau - autorité portuaire » doivent-elles utiliser dans le trafic radiotéléphonique ?"
    },
    answers: [
      {
        text: {
          de: "Schiffsname.",
          fr: "Nom du bateau."
        },
        correct: true
      },
      {
        text: {
          de: "ATIS-Kennung.",
          fr: "Code ATIS."
        },
        correct: false
      },
      {
        text: {
          de: "Rufnummer im Seefunkdienst (MMSI).",
          fr: "Numéro sélectif du service mobile maritime (MMSI)."
        },
        correct: false
      },
      {
        text: {
          de: "Namen des Heimathafens.",
          fr: "Nom du port d'attache."
        },
        correct: false
      }
    ]
  },
  // Frage 76
  {
    question: {
      de: "In welchen Verkehrskreisen müssen Schiffsfunkstellen, ausser auf Kleinfahrzeugen, während der Fahrt empfangsbereit sein?",
      fr: "Dans quels réseaux les stations de bateau doivent-elles être sur veille à l'exception des véhicules de petite taille pendant le voyage ?"
    },
    answers: [
      {
        text: {
          de: "Mindestens in zwei der Verkehrskreise Schiff - Schiff, Nautische Information oder Schiff - Hafenbehörde.",
          fr: "Au moins dans deux des réseaux Bateau-bateau, Information nautique ou Bateau-autorités portuaires."
        },
        correct: true
      },
      {
        text: {
          de: "Mindestens in drei der Verkehrskreise Schiff - Schiff, Nautische Information, Funkverkehr an Bord oder Schiff - Hafenbehörde.",
          fr: "Au moins dans trois des réseaux Bateau-bateau, Information nautique, Communications à bord ou Bateau - autorités portuaires."
        },
        correct: false
      },
      {
        text: {
          de: "Mindestens in einem der Verkehrskreise Schiff - Schiff, Nautische Information oder Schiff - Hafenbehörde.",
          fr: "Au moins dans un des réseaux Bateau-bateau, Information nautique ou Bateau-autorités portuaires."
        },
        correct: false
      },
      {
        text: {
          de: "Mindestens abwechselnd in einem der Verkehrskreise Schiff - Schiff, Nautische Information, Funkverkehr an Bord oder Schiff - Hafenbehörde.",
          fr: "Au moins alternativement dans un réseau Bateau-Bateau, Information nautique, Communications à bord ou bateau-autorités portuaires."
        },
        correct: false
      }
    ]
  },
  // Frage 77
  {
    question: {
      de: "Wo findet man unter anderem Regelungen über die Abwicklung des Binnenschifffahrtsfunks?",
      fr: "Où peut-on trouver la règlementation sur les procédures radiotéléphoniques du service radiotéléphonique sur les voies de navigation intérieures ?"
    },
    answers: [
      {
        text: {
          de: "Allgemeiner Teil des Handbuchs Binnenschifffahrtsfunk.",
          fr: "Partie générale du guide de radiocommunication pour la navigation intérieure."
        },
        correct: true
      },
      {
        text: {
          de: "Regionaler Teil Luxemburgs des Handbuchs Binnenschifffahrtsfunk.",
          fr: "Partie régionale pour le Luxembourg du guide radiotéléphonique sur les voies de navigation intérieures."
        },
        correct: false
      },
      {
        text: {
          de: "Großherzogliche Binnenschifffahrt-Sprechfunkverordnung.",
          fr: "Dans le règlement grand-ducal pour la radiotéléphonie sur les voies de navigation intérieures."
        },
        correct: false
      },
      {
        text: {
          de: "Großherzogliche Binnenschifffahrtsstraßenverordnung.",
          fr: "Dans le règlement grand-ducal pour les voies de navigation intérieures."
        },
        correct: false
      }
    ]
  },
  // Frage 78
  {
    question: {
      de: "Wo findet man die Empfehlungen hinsichtlich fremdsprachlichen Redewendungen für die Abwicklung des Binnenschifffahrtsfunks?",
      fr: "Où peut-on trouver les tournures en langues étrangères recommandées pour les procédures radiotéléphoniques?"
    },
    answers: [
      {
        text: {
          de: "Regionale Teile des Handbuchs Binnenschifffahrtsfunk.",
          fr: "Parties régionales du guide radiotéléphonique sur les voies de navigation intérieures."
        },
        correct: true
      },
      {
        text: {
          de: "Allgemeiner Teil des Handbuchs Binnenschifffahrtsfunk.",
          fr: "Partie générale du guide radiotéléphonique sur les voies de navigation intérieures."
        },
        correct: false
      },
      {
        text: {
          de: "Großherzogliche Binnenschifffahrt-Sprechfunkverordnung.",
          fr: "Dans le règlement grand-ducal pour la radiotéléphonie sur les voies de navigation intérieures."
        },
        correct: false
      },
      {
        text: {
          de: "Großherzogliche Binnenschifffahrtsstraßenverordnung.",
          fr: "Dans le règlement grand-ducal pour les voies de navigation intérieures."
        },
        correct: false
      }
    ]
  },
  // Frage 79
  {
    question: {
      de: "Wozu dient die Internationale Buchstabiertafel im Binnenschifffahrtsfunk?",
      fr: "À quoi sert l'alphabet phonétique international dans le service radiotéléphonique sur les voies de navigation intérieures?"
    },
    answers: [
      {
        text: {
          de: "Zum Buchstabieren schwieriger Wörter, Namen und Bezeichnungen, um Übermittlungsfehler zu vermeiden.",
          fr: "Pour épeler des mots, des noms et des désignations difficiles à prononcer afin d'éviter des erreurs de transmission."
        },
        correct: true
      },
      {
        text: {
          de: "Zum Buchstabieren schwieriger Wörter, Namen und Bezeichnungen, um die Vorschriften der Binnenschifffahrt-Sprechfunkverordnung zu erfüllen.",
          fr: "Pour épeler des mots, des noms et des désignations difficiles à prononcer pour répondre aux exigences du règlement sur la radiotéléphonie sur les voies de la navigation intérieure."
        },
        correct: false
      },
      {
        text: {
          de: "Zum Buchstabieren schwieriger Wörter, Namen und Bezeichnungen, um die Wichtigkeit der buchstabierten Begriffe zu betonen.",
          fr: "Pour épeler des mots, des noms et des désignations difficiles à prononcer afin de souligner l'importance des termes épelés."
        },
        correct: false
      },
      {
        text: {
          de: "Zum Buchstabieren schwieriger Wörter, Namen und Bezeichnungen, um Informationen zu verschlüsseln.",
          fr: "Pour épeler des mots, des noms et des désignations difficiles à prononcer pour chiffrer les informations."
        },
        correct: false
      }
    ]
  },
  // Frage 80
  {
    question: {
      de: "Wo findet man Angaben über die UKW-Kanäle, die im Binnenschifffahrtsfunk für eine bestimmte Region zu verwenden sind?",
      fr: "Où peut-on trouver des informations sur les canaux VHF qui sont à utiliser dans le service radiotéléphonique sur les voies de navigation intérieures pour une certaine région?"
    },
    answers: [
      {
        text: {
          de: "Regionale Teile des Handbuchs Binnenschifffahrtsfunk.",
          fr: "Parties régionales du guide radiotéléphonique sur les voies de navigation intérieures."
        },
        correct: true
      },
      {
        text: {
          de: "Polizeiliche Schifffahrtspolizeiverordnungen.",
          fr: "Dans le règlement de police sur les voies de navigation intérieures."
        },
        correct: false
      },
      {
        text: {
          de: "Großherzogliche Binnenschifffahrtsstraßenordnung.",
          fr: "Dans le règlement grand-ducal pour les voies de navigation intérieures."
        },
        correct: false
      },
      {
        text: {
          de: "Großherzogliche Binnenschifffahrt-Sprechfunkverordnung.",
          fr: "Dans le règlement grand-ducal pour la radiotéléphonie sur les voies de navigation intérieures."
        },
        correct: false
      }
    ]
  },
  // Frage 81
  {
    question: {
      de: "Was ist der Modus 'Simplex'?",
      fr: "Quel est le mode de fonctionnement « Simplex »?"
    },
    answers: [
      {
        text: {
          de: "Betrieb, bei dem Senden und Empfangen auf der gleichen Frequenz nacheinander erfolgt.",
          fr: "Un mode de fonctionnement où l'émission et la réception s'effectuent successivement sur la même fréquence."
        },
        correct: true
      },
      {
        text: {
          de: "Betrieb, bei dem Senden und Empfangen auf verschiedenen Frequenzen gleichzeitig erfolgt.",
          fr: "Un mode de fonctionnement où l'émission et la réception s'effectuent simultanément sur des fréquences différentes."
        },
        correct: false
      },
      {
        text: {
          de: "Betrieb, bei dem Senden und Empfangen unabhängig voneinander erfolgen.",
          fr: "Un mode de fonctionnement où l'émission et la réception s'effectuent indépendamment l'un de l'autre."
        },
        correct: false
      },
      {
        text: {
          de: "Betrieb, bei dem Senden und Empfangen auf der gleichen Frequenz gleichzeitig erfolgen.",
          fr: "Un mode de fonctionnement où l'émission et la réception s'effectuent simultanément sur la même fréquence."
        },
        correct: false
      }
    ]
  },
  // Frage 82
  {
    question: {
      de: "Wie erfolgt die Verkehrsabwicklung in der Betriebsart „Simplex“?",
      fr: "Comment est effectuée la procédure de radiotéléphonie au mode « Simplex »?"
    },
    answers: [
      {
        text: {
          de: "Jeder Gesprächspartner kann entweder senden oder empfangen.",
          fr: "Chaque interlocuteur peut ou bien transmettre ou bien recevoir."
        },
        correct: true
      },
      {
        text: {
          de: "Beide Gesprächspartner können gleichzeitig senden und empfangen.",
          fr: "Les deux interlocuteurs peuvent transmettre ou recevoir simultanément."
        },
        correct: false
      },
      {
        text: {
          de: "Nach den Vorgaben der Revierzentrale.",
          fr: "Selon les spécifications de la centrale du secteur."
        },
        correct: false
      },
      {
        text: {
          de: "Der Funkverkehr kann nur in Richtung Landfunkstelle-Schiffsfunkstelle betrieben werden.",
          fr: "La radiocommunication ne peut être exploitée qu'en direction de la station terrestre via station de bateau."
        },
        correct: false
      }
    ]
  },
  // Frage 83
  {
    question: {
      de: "Was bedeutet die Betriebsart „Duplex“?",
      fr: "Que signifie le mode d'utilisation « Duplex »?"
    },
    answers: [
      {
        text: {
          de: "Gegensprechen.",
          fr: "Radiocommunications bi-directionnelles."
        },
        correct: true
      },
      {
        text: {
          de: "Wechselsprechen.",
          fr: "Radiocommunications mono-directionnelles."
        },
        correct: false
      },
      {
        text: {
          de: "Sprechen mit zwei Funkgeräten.",
          fr: "Radiocommunications avec deux équipements radioélectriques."
        },
        correct: false
      },
      {
        text: {
          de: "Sprechen auf einer Frequenz.",
          fr: "Radiocommunications sur une fréquence."
        },
        correct: false
      }
    ]
  },
  // Frage 84
  {
    question: {
      de: "Was bedeutet die Betriebsart „Semi-Duplex“?",
      fr: "Que signifie le mode d’utilisation « Semi-Duplex »?"
    },
    answers: [
      {
        text: {
          de: "Wechselsprechen auf einem Duplex-Kanal.",
          fr: "Radiocommunications mono-directionnelles sur un canal duplex."
        },
        correct: true
      },
      {
        text: {
          de: "Wechselsprechen auf einem Simplex-Kanal.",
          fr: "Radiocommunications mono-directionnelles sur un canal simplex."
        },
        correct: false
      },
      {
        text: {
          de: "Gegensprechen auf einem Duplex-Kanal.",
          fr: "Radiocommunications bi-directionnelles sur un canal duplex."
        },
        correct: false
      },
      {
        text: {
          de: "Gegensprechen auf einem Simplex-Kanal.",
          fr: "Radiocommunications bi-directionnelles sur un canal simplex."
        },
        correct: false
      }
    ]
  },
  // Frage 86
  {
    question: {
      de: "Wie erfolgt die Leistungsreduzierung beim Sendebetrieb einer Schiffsfunkstelle auf dem UKW-Kanal 10?",
      fr: "Comment se fait la réduction de la puissance en mode de transmission d’une station de bateau sur le canal VHF 10?"
    },
    answers: [
      {
        text: {
          de: "Automatisch.",
          fr: "Automatique."
        },
        correct: true
      },
      {
        text: {
          de: "Manuell.",
          fr: "Manuel."
        },
        correct: false
      },
      {
        text: {
          de: "Durch die Revierzentrale.",
          fr: "Par la centrale du secteur."
        },
        correct: false
      },
      {
        text: {
          de: "Durch längeres Drücken der Sendetaste.",
          fr: "En appuyant plus longtemps sur le bouton de transmission (PTT)."
        },
        correct: false
      }
    ]
  },
  // Frage 87
  {
    question: {
      de: "Mit welcher Leistung sendet eine Schiffsfunkstelle auf UKW-Kanal 10?",
      fr: "À quelle puissance la station de bateau émet-elle sur le canal VHF 10?"
    },
    answers: [
      {
        text: {
          de: "0,5 bis 1 Watt.",
          fr: "0,5 à 1 Watt."
        },
        correct: true
      },
      {
        text: {
          de: "2 bis 5 Watt.",
          fr: "2 à 5 watts."
        },
        correct: false
      },
      {
        text: {
          de: "0,5 bis 25 Watt.",
          fr: "0,5 à 25 watts."
        },
        correct: false
      },
      {
        text: {
          de: "10 bis 25 Watt.",
          fr: "10 à 25 watts."
        },
        correct: false
      }
    ]
  },
  // Frage 88
  {
    question: {
      de: "Auf welchem UKW-Kanal müssen Schiffsfunkstellen – unabhängig von dem befahrenen Streckenabschnitt – während der Fahrt ständig empfangsbereit sein?",
      fr: "Sur quel canal VHF les stations de bateau en mouvement doivent-elles être sur veille en permanence, indépendamment de la route sur laquelle le bateau se situe?"
    },
    answers: [
      {
        text: {
          de: "Kanal 10.",
          fr: "Canal 10."
        },
        correct: true
      },
      {
        text: {
          de: "Kanal 72.",
          fr: "Canal 72."
        },
        correct: false
      },
      {
        text: {
          de: "Kanal 20.",
          fr: "Canal 20."
        },
        correct: false
      },
      {
        text: {
          de: "Kanal 13.",
          fr: "Canal 13."
        },
        correct: false
      }
    ]
  },
  // Frage 89
  {
    question: {
      de: "Welcher UKW-Kanal darf im Binnenschifffahrtsfunk nicht auf der Mosel benutzt werden?",
      fr: "Quel canal VHF ne doit pas être utilisé pour le service radiotéléphonique par voies de navigation intérieures?"
    },
    answers: [
      {
        text: {
          de: "16",
          fr: "Canal 16."
        },
        correct: true
      },
      {
        text: {
          de: "72",
          fr: "Canal 72."
        },
        correct: false
      },
      {
        text: {
          de: "10",
          fr: "Canal 10."
        },
        correct: false
      },
      {
        text: {
          de: "77",
          fr: "Canal 77."
        },
        correct: false
      }
    ]
  },
  // Frage 90
  {
    question: {
      de: "Wozu dient im Binnenschifffahrtsfunk der UKW-Kanal 77 auf der Mosel?",
      fr: "À quoi sert le canal VHF 77 dans le service radiotéléphonique sur les voies de navigation intérieures?"
    },
    answers: [
      {
        text: {
          de: "Funkverkehr sozialer Art.",
          fr: "Radiocommunications de nature sociale."
        },
        correct: true
      },
      {
        text: {
          de: "Nautische Absprachen.",
          fr: "Arrangements nautiques."
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr mit einer Revierzentrale.",
          fr: "Radiocommunications avec la centrale du secteur."
        },
        correct: false
      },
      {
        text: {
          de: "Anrufe an eine Schleuse.",
          fr: "Appels à une écluse."
        },
        correct: false
      }
    ]
  },
  // Frage 91
  {
    question: {
      de: "Welche UKW-Kanäle dürfen für „Nachrichten sozialer Art” benutzt werden?",
      fr: "Quels canaux VHF peuvent être utilisés pour des \"communications de nature sociale\"?"
    },
    answers: [
      {
        text: {
          de: "77 und lokaler Kanal.",
          fr: "77 et canal local."
        },
        correct: true
      },
      {
        text: {
          de: "15 und 17.",
          fr: "15 et 17."
        },
        correct: false
      },
      {
        text: {
          de: "06 und 16.",
          fr: "06 et 16."
        },
        correct: false
      },
      {
        text: {
          de: "20 und 22.",
          fr: "20 et 22."
        },
        correct: false
      }
    ]
  },
  // Frage 92
  {
    question: {
      de: "Welche Fahrzeuge unterliegen auf bestimmten Wasserstraßen und an besonderen Stellen einer Meldepflicht?",
      fr: "Quels types de véhicules sont soumis à une obligation de déclaration sur certaines voies de navigation et à des points particuliers?"
    },
    answers: [
      {
        text: {
          de: "Gefahrgutschiffe und Sondertransporte.",
          fr: "Navire à cargaison dangereuse et transports spéciaux."
        },
        correct: true
      },
      {
        text: {
          de: "Motorfahrzeuge mit einer Gesamtlänge von mehr als 20 Metern.",
          fr: "Véhicules à moteur d'une longueur totale de plus de 20 mètres."
        },
        correct: false
      },
      {
        text: {
          de: "Fahrgastschiffe mit mehr als 20 Passagieren.",
          fr: "Les bateaux à passagers avec plus de 20 passagers."
        },
        correct: false
      },
      {
        text: {
          de: "Sportboote unter Segel.",
          fr: "Bateaux de sport à voile."
        },
        correct: false
      }
    ]
  },
  // Frage 93
  {
    question: {
      de: "Vor jeder Aussendung ist sicherzustellen, dass...",
      fr: "Avant chaque transmission on doit s'assurer que..."
    },
    answers: [
      {
        text: {
          de: "kein anderer Funkverkehr gestört wird.",
          fr: "qu’aucune autre radiocommunication n'est perturbée."
        },
        correct: true
      },
      {
        text: {
          de: "die Sendeleistung auf 25 Watt eingestellt ist.",
          fr: "que la puissance d’émission est réglée à 25 Watt."
        },
        correct: false
      },
      {
        text: {
          de: "die ATIS-Kennung zuvor ausgesendet wurde.",
          fr: "que le code ATIS a été transmis à l'avance."
        },
        correct: false
      },
      {
        text: {
          de: "die Rauschsperre geöffnet ist.",
          fr: "que le squelch est ouvert."
        },
        correct: false
      }
    ]
  },
  // Frage 94
  {
    question: {
      de: "Die längere Aussendung einer anderen Schiffsfunkstelle auf Kanal 10 kann...",
      fr: "Une transmission de longue durée d'une autre station de bateau sur le canal 10 peut..."
    },
    answers: [
      {
        text: {
          de: "jederzeit unterbrochen werden.",
          fr: "peut être interrompue à tout moment."
        },
        correct: false
      },
      {
        text: {
          de: "nicht unterbrochen werden, ausser im Notfall",
          fr: "ne peut pas être interrompue."
        },
        correct: true
      },
      {
        text: {
          de: "durch Schiffsfunkstellen desselben Verkehrskreises unterbrochen werden.",
          fr: "peut être interrompue par une station de bateau travaillant dans le même réseau."
        },
        correct: false
      },
      {
        text: {
          de: "jederzeit durch Landfunkstellen unterbrochen werden.",
          fr: "peut être interrompue à tout moment par la station terrestre."
        },
        correct: false
      }
    ]
  },
  // Frage 96
  {
    question: {
      de: "Was hat eine Schiffsfunkstelle im Verkehr mit einer Landfunkstelle zu beachten?",
      fr: "Que doit observer une station de bateau en cas de radiocommunication avec une station terrestre?"
    },
    answers: [
      {
        text: {
          de: "Anweisungen der Landfunkstelle sind zu befolgen.",
          fr: "Les instructions de la station terrestre sont à suivre."
        },
        correct: true
      },
      {
        text: {
          de: "Nachrichten mit der Landfunkstelle sind auf Kanal 16 auszutauschen.",
          fr: "Les radiocommunications avec une station terrestre sont à échanger sur le canal 16."
        },
        correct: false
      },
      {
        text: {
          de: "Die Sendeleistung ist zu reduzieren.",
          fr: "La puissance d'émission est à réduire."
        },
        correct: false
      },
      {
        text: {
          de: "Die Hörbereitschaft auf Kanal 13 ist sicherzustellen.",
          fr: "La veille sur le canal 13 est à assurer."
        },
        correct: false
      }
    ]
  },
  // Frage 97
  {
    question: {
      de: "Was kann die Funkverbindung zwischen einer Schiffsfunkstelle und einer Seefunkstelle beeinträchtigen?",
      fr: "Qu'est-ce qui peut affecter une radiocommunication entre une station de bateau et une station de navire?"
    },
    answers: [
      {
        text: {
          de: "Die Schiffsfunkstelle sendet auf bestimmten UKW-Kanälen nur mit automatisch reduzierter Leistung.",
          fr: "Une station de bateau n’émet qu’avec une puissance réduite automatiquement sur certains canaux VHF."
        },
        correct: true
      },
      {
        text: {
          de: "Die Seefunkstelle sendet auf bestimmten UKW-Kanälen nur mit automatisch reduzierter Leistung.",
          fr: "Une station de navire émet avec une puissance réduite automatiquement sur certains canaux VHF."
        },
        correct: false
      },
      {
        text: {
          de: "Die Schiffsfunkstelle kann die AIS-Aussendung der Seefunkstelle auf bestimmten UKW-Kanälen nicht auswerten.",
          fr: "La station de bateau ne peut pas évaluer les transmissions AIS de la station de navire sur certains canaux VHF."
        },
        correct: false
      },
      {
        text: {
          de: "Die Seefunkstelle kann die ATIS-Aussendung der Schiffsfunkstelle auf bestimmten UKW-Kanälen nicht auswerten.",
          fr: "La station de navire ne peut pas évaluer les transmissions ATIS d'une station de bateau sur certains canaux VHF."
        },
        correct: false
      }
    ]
  },
  // Frage 98
  {
    question: {
      de: "Warum dürfen Seefunkstellen mit ihrer Seefunkanlage nicht am Binnenschifffahrtsfunk teilnehmen?",
      fr: "Pourquoi les stations de navire avec leurs équipements radioélectriques maritime ne sont-elles pas autorisées à participer au service radiotéléphonique sur les voies de navigation intérieures?"
    },
    answers: [
      {
        text: {
          de: "Seefunkanlagen verfügen weder über eine automatische Sendeleistungsreduzierung auf bestimmten UKW-Kanälen noch können sie einen ATIS-Code aussenden.",
          fr: "Les installations radioélectriques maritimes ne disposent pas de réduction automatique de la puissance d'émission sur certains canaux VHF et ne peuvent pas transmettre de code ATIS."
        },
        correct: true
      },
      {
        text: {
          de: "Seefunkanlagen nutzen ein anderes Frequenzband als Binnenschifffahrtsfunkanlagen.",
          fr: "Les équipements radioélectriques maritimes utilisent une autre bande de fréquences que les équipements du service radiotéléphonique sur voies intérieures."
        },
        correct: false
      },
      {
        text: {
          de: "Seefunkanlagen verfügen über einen DSC-Controller, der mit dem ATIS-System nicht kompatibel ist.",
          fr: "Les équipements radioélectriques maritimes disposent d'un contrôleur ASN, qui n'est pas compatible avec le système ATIS."
        },
        correct: false
      },
      {
        text: {
          de: "Seefunkanlagen ermöglichen die Hörbereitschaft auf den UKW-Kanälen 16 und 70.",
          fr: "Les équipements radioélectriques maritimes permettent une écoute sur les canaux VHF 16 et 70."
        },
        correct: false
      }
    ]
  },
  // Frage 99
  {
    question: {
      de: "Die Verwendung des Digitalen Selektivrufs (DSC) ist ...",
      fr: "L'utilisation de l'appel sélectif numérique (ASN) est ..."
    },
    answers: [
      {
        text: {
          de: "im Binnenschifffahrtsfunk nicht zulässig.",
          fr: "Non autorisée dans le service radiotéléphonique sur les voies de navigation intérieure."
        },
        correct: true
      },
      {
        text: {
          de: "eingeführt zur Verbindungsaufnahme mit anderen Schiffsfunkstellen.",
          fr: "Mise en place pour établir une connexion avec d'autres stations de navire."
        },
        correct: false
      },
      {
        text: {
          de: "eingeführt zur Identifizierung von Schiffsfunkstellen.",
          fr: "Mise en place pour l'identification des stations de navire."
        },
        correct: false
      },
      {
        text: {
          de: "im Binnenschifffahrtsfunk zulässig, um Notalarme zu senden.",
          fr: "Autorisée sur les voies de navigation intérieures pour émettre des alarmes de détresse."
        },
        correct: false
      }
    ]
  },
  // Frage 100
  {
    question: {
      de: "Welche Sprache muss bei Verbindungen zwischen luxemburgischen Schiffsfunkstellen und ausländischen Landfunkstellen benutzt werden?",
      fr: "Quelle langue doit être utilisée pour les connexions entre les stations de navire luxembourgeois et les stations terrestres étrangères?"
    },
    answers: [
      {
        text: {
          de: "Sprache des Landes, in dem sich die Landfunkstelle befindet.",
          fr: "Langue du pays où se trouve la station terrestre ou la langue anglaise."
        },
        correct: true
      },
      {
        text: {
          de: "Muttersprache des Funkers.",
          fr: "Langue maternelle de l'opérateur radiotéléphonique."
        },
        correct: false
      },
      {
        text: {
          de: "Vorrangig Englisch.",
          fr: "Principalement en anglais."
        },
        correct: false
      },
      {
        text: {
          de: "Vorrangig Deutsch.",
          fr: "Principalement en allemand."
        },
        correct: false
      }
    ]
  },
  // Frage 101
  {
    question: {
      de: "Was ist bei Testaussendungen im Binnenfunk zu beachten?",
      fr: "Que faut-il observer pour les transmissions de tests dans le service radiotéléphonique sur voies de navigation intérieures?"
    },
    answers: [
      {
        text: {
          de: "Die Aussendungen dürfen 10 Sekunden nicht überschreiten; sie müssen den Rufnamen der aussendenden Funkstelle enthalten, gefolgt von dem Wort „Test“.",
          fr: "Les émissions TEST ne doivent pas dépasser 10 secondes; elles doivent contenir le nom de la station faisant l’émission, suivi du mot « Test »."
        },
        correct: true
      },
      {
        text: {
          de: "Die Aussendungen dürfen 20 Sekunden nicht überschreiten und müssen mit einer Kennung des Schiffes erfolgen.",
          fr: "Les émissions TEST ne doivent pas dépasser 20 secondes et doivent être diffusées avec un identifiant du bateau."
        },
        correct: false
      },
      {
        text: {
          de: "Die Aussendungen dürfen einmal nach Einbau des Gerätes ohne Antenne erfolgen und müssen mit dem Wort „Test“ gekennzeichnet werden.",
          fr: "Les émissions peuvent avoir lieu une fois après l'installation de l'équipement radioélectrique mais sans antenne et doivent être marquées du mot « test »."
        },
        correct: false
      },
      {
        text: {
          de: "Die Aussendungen dürfen nur außerhalb der Hoheitsgewässer erfolgen.",
          fr: "Les émissions ne peuvent être transmises qu'en dehors des eaux territoriales."
        },
        correct: false
      }
    ]
  },
  // Frage 103
  {
    question: {
      de: "Woran erkennt man beim Befahren von Binnenwasserstraßen, welcher UKW-Kanal im Schleusenbereich zu benutzen ist?",
      fr: "Comment savoir quel canal VHF est à utiliser dans la zone d'une écluse lors de la navigation sur les voies de navigation intérieures ?"
    },
    answers: [
      {
        text: {
          de: "Tafelzeichen.",
          fr: "Signaux panneau."
        },
        correct: true
      },
      {
        text: {
          de: "Schwimmende Schifffahrtszeichen.",
          fr: "Signaux de navigation flottante."
        },
        correct: false
      },
      {
        text: {
          de: "Durchsage der Revierzentrale.",
          fr: "Annonce de la centrale de circulation."
        },
        correct: false
      },
      {
        text: {
          de: "Lichtzeichen der Schleuse.",
          fr: "Signaux lumineux de l'écluse."
        },
        correct: false
      }
    ]
  },
  // Frage 104
  {
    question: {
      de: "Welche Bedeutung hat ein weißes Tafelzeichen mit rotem Rand und der schwarzen Aufschrift „UKW 20“ oder „VHF 20“?",
      fr: "Quelle est la signification d’un panneau blanc avec une bordure rouge et l'inscription noire \"UKW 20\" ou \"VHF 20\"?"
    },
    answers: [
      {
        text: {
          de: "Anweisung, UKW-Kanal 20 zu benutzen.",
          fr: "Instruction d'utiliser le canal VHF 20."
        },
        correct: true
      },
      {
        text: {
          de: "Anweisung, eine Sendeleistung von 20 Watt zu gewährleisten.",
          fr: "Instruction d’assurer une puissance d'émission de 20 Watt."
        },
        correct: false
      },
      {
        text: {
          de: "Hinweis, dass der Verkehrskreis Schiff-Schiff auf UKW-Kanal 20 abzuwickeln ist.",
          fr: "Un note de conduire les radiocommunications du réseau bateau-bateau sur le canal VHF 20."
        },
        correct: false
      },
      {
        text: {
          de: "Hinweis, dass der UKW-Kanal 20 durch die Berufsschifffahrt benutzt wird.",
          fr: "Une note indiquant que le canal VHF 20 est utilisé pour la navigation commerciale."
        },
        correct: false
      }
    ]
  },
  // Frage 105
  {
    question: {
      de: "Welche Bedeutung hat ein blaues Tafelzeichen mit weißer Aufschrift „UKW 18“ oder „VHF 18“?",
      fr: "Quelle est la signification d'un panneau bleu avec l'inscription blanche \"UKW 18\" ou \"VHF 18\" ?"
    },
    answers: [
      {
        text: {
          de: "Hinweis auf den Nautischen Informationsfunk (NIF) auf UKW-Kanal 18.",
          fr: "Référence aux informations nautiques (NIF) sur le canal VHF 18."
        },
        correct: true
      },
      {
        text: {
          de: "Anweisung, UKW-Kanal 18 statt 10 für die Verkehrsabwicklung zu benutzen.",
          fr: "Instruction d'utiliser le canal VHF 18 au lieu du 10 pour la gestion du trafic."
        },
        correct: false
      },
      {
        text: {
          de: "Hinweis, dass der Verkehrskreis Schiff-Schiff auf UKW-Kanal 18 abzuwickeln ist.",
          fr: "Référence d’utiliser le canal VHF 18 pour le réseau bateau - bateau."
        },
        correct: false
      },
      {
        text: {
          de: "Hinweis, dass der UKW-Kanal 18 dazu für die Sportschifffahrt vorgesehen ist.",
          fr: "Indication que le canal VHF 18 est destiné à être utilisé par les bateaux de plaisance."
        },
        correct: false
      }
    ]
  },
  // Frage 106
  {
    question: {
      de: "Welche Funkstellen sind zur Einleitung von Rettungsmaßnahmen vorzugsweise anzurufen?",
      fr: "Quelles stations radioélectriques faut-il appeler de préférence pour lancer des mesures de sauvetage ?"
    },
    answers: [
      {
        text: {
          de: "Rettungsleitstellen",
          fr: "Centres de coordination des opérations de sauvetage."
        },
        correct: false
      },
      {
        text: {
          de: "Landfunkstellen",
          fr: "Centrales de réseau."
        },
        correct: true
      },
      {
        text: {
          de: "Schiffsfunkstellen",
          fr: "Stations de navire."
        },
        correct: false
      },
      {
        text: {
          de: "Polizeifunkstellen",
          fr: "Stations de la police."
        },
        correct: false
      }
    ]
  },
  // Frage 107
  {
    question: {
      de: "Wie ist die Rangfolge des Funkverkehrs im Binnenschifffahrtsfunk?",
      fr: "Quelle est la priorité du trafic radiotéléphonique dans le service radiotéléphonique sur les voies de navigation intérieures ?"
    },
    answers: [
      {
        text: {
          de: "Notverkehr, Dringlichkeitsverkehr, Sicherheitsverkehr, Routineverkehr.",
          fr: "Trafic de détresse, trafic d'urgence, trafic de sécurité, trafic de routine."
        },
        correct: true
      },
      {
        text: {
          de: "Dringlichkeitsverkehr, Notverkehr, Sicherheitsverkehr, Routineverkehr.",
          fr: "Trafic d'urgence, trafic de détresse, trafic de sécurité, trafic de routine."
        },
        correct: false
      },
      {
        text: {
          de: "Sicherheitsverkehr, Dringlichkeitsverkehr, Notverkehr, Routineverkehr.",
          fr: "Trafic de sécurité, trafic d'urgence, trafic de détresse, trafic de routine."
        },
        correct: false
      },
      {
        text: {
          de: "Notverkehr, Dringlichkeitsverkehr, Routineverkehr, Sicherheitsverkehr.",
          fr: "Trafic de détresse, trafic d'urgence, trafic de routine, trafic de sécurité."
        },
        correct: false
      }
    ]
  },
  // Frage 108
  {
    question: {
      de: "Wie heißt das Notzeichen im Sprechfunk?",
      fr: "Quel est le signal de détresse en radiotéléphonie ?"
    },
    answers: [
      {
        text: {
          de: "MAYDAY",
          fr: "MAYDAY."
        },
        correct: true
      },
      {
        text: {
          de: "PAN PAN",
          fr: "PAN PAN."
        },
        correct: false
      },
      {
        text: {
          de: "SOS",
          fr: "SOS."
        },
        correct: false
      },
      {
        text: {
          de: "SECURITE",
          fr: "SECURITE."
        },
        correct: false
      }
    ]
  },
  // Frage 110
  {
    question: {
      de: "Welcher Funkverkehr ist einzuleiten, wenn sich an Bord eine lebensgefährlich verletzte Person befindet?",
      fr: "Quelle radiocommunication doit être établie si une personne blessée en danger de mort se trouve à bord ?"
    },
    answers: [
      {
        text: {
          de: "Notverkehr.",
          fr: "Trafic de détresse."
        },
        correct: true
      },
      {
        text: {
          de: "Dringlichkeitsverkehr.",
          fr: "Trafic d'urgence."
        },
        correct: false
      },
      {
        text: {
          de: "Sicherheitsverkehr.",
          fr: "Trafic de sécurité."
        },
        correct: false
      },
      {
        text: {
          de: "Routineverkehr.",
          fr: "Trafic de routine."
        },
        correct: false
      }
    ]
  },
  // Frage 111
  {
    question: {
      de: "Welcher Funkverkehr ist einzuleiten, wenn eine Person über Bord gefallen ist?",
      fr: "Quelle radiocommunication doit-on établir si une personne est tombée par-dessus bord ?"
    },
    answers: [
      {
        text: {
          de: "Notverkehr.",
          fr: "Trafic de détresse."
        },
        correct: true
      },
      {
        text: {
          de: "Dringlichkeitsverkehr.",
          fr: "Trafic d'urgence."
        },
        correct: false
      },
      {
        text: {
          de: "Sicherheitsverkehr.",
          fr: "Trafic de sécurité."
        },
        correct: false
      },
      {
        text: {
          de: "Routineverkehr.",
          fr: "Trafic de routine."
        },
        correct: false
      }
    ]
  },
  // Frage 112
  {
    question: {
      de: "Welcher Funkverkehr ist einzuleiten, wenn das Fahrzeug in gefährlicher Weise zu kentern droht?",
      fr: "Quelle radiocommunication doit être initiée si le véhicule risque de chavirer dangereusement ?"
    },
    answers: [
      {
        text: {
          de: "Notverkehr.",
          fr: "Trafic de détresse."
        },
        correct: true
      },
      {
        text: {
          de: "Dringlichkeitsverkehr.",
          fr: "Trafic d'urgence."
        },
        correct: false
      },
      {
        text: {
          de: "Sicherheitsverkehr.",
          fr: "Trafic de sécurité."
        },
        correct: false
      },
      {
        text: {
          de: "Routineverkehr.",
          fr: "Trafic de routine."
        },
        correct: false
      }
    ]
  },
  // Frage 113
  {
    question: {
      de: "Wer bestätigt eine Notmeldung im Verkehrskreis „Nautische Information“?",
      fr: "Qui confirme un message de détresse dans le réseau \"informations nautiques\" ?"
    },
    answers: [
      {
        text: {
          de: "Ortsfeste Funkstelle.",
          fr: "Station fixe terrestre."
        },
        correct: true
      },
      {
        text: {
          de: "Behördenfahrzeuge.",
          fr: "Véhicules officiels des autorités."
        },
        correct: false
      },
      {
        text: {
          de: "In der Nähe befindliche Schiffsfunkstelle.",
          fr: "Station de bateau à proximité."
        },
        correct: false
      },
      {
        text: {
          de: "Der Schiffsführer.",
          fr: "Le commandant de bord."
        },
        correct: false
      }
    ]
  },
  // Frage 114
  {
    question: {
      de: "Wer bestätigt eine Notmeldung im Verkehrskreis „Schiff-Schiff“?",
      fr: "Qui confirme un message de détresse dans le réseau \"bateau à bateau\" ?"
    },
    answers: [
      {
        text: {
          de: "In der Nähe befindliche Schiffsfunkstelle.",
          fr: "Station de bateau à proximité."
        },
        correct: true
      },
      {
        text: {
          de: "Ortsfeste Funkstelle.",
          fr: "Station fixe terrestre."
        },
        correct: false
      },
      {
        text: {
          de: "Verkehrsposten.",
          fr: "Poste de circulation."
        },
        correct: false
      },
      {
        text: {
          de: "Der Schiffsführer.",
          fr: "Le commandant de bord."
        },
        correct: false
      }
    ]
  },
  // Frage 115
  {
    question: {
      de: "Was bedeuten die Worte MAYDAY RELAY?",
      fr: "Que signifient les mots MAYDAY RELAY ?"
    },
    answers: [
      {
        text: {
          de: "Aussendung einer Notmeldung durch eine Funkstelle, die sich selbst nicht in Not befindet.",
          fr: "Transmission d'un message de détresse par une station de bateau qui n'est pas en détresse elle-même."
        },
        correct: true
      },
      {
        text: {
          de: "Beendigung einer Notmeldung durch die Funkstelle, die den Notverkehr leitet.",
          fr: "Fin d'un message de détresse par la station de bateau qui dirige le trafic de détresse."
        },
        correct: false
      },
      {
        text: {
          de: "Empfangsbestätigung einer Notmeldung.",
          fr: "Accusé de réception d'un message de détresse."
        },
        correct: false
      },
      {
        text: {
          de: "Notmeldung an eine Landstation mit der Bitte um Leitung des Notverkehrs.",
          fr: "Message de détresse à une station terrestre avec la demande de diriger le trafic de détresse."
        },
        correct: false
      }
    ]
  },
  // Frage 116
  {
    question: {
      de: "Was bedeuten die Worte SILENCE FINI?",
      fr: "Que signifient les mots SILENCE FINI?"
    },
    answers: [
      {
        text: {
          de: "Der Notverkehr ist beendet.",
          fr: "Le trafic de détresse est terminé."
        },
        correct: true
      },
      {
        text: {
          de: "Einer Funkstelle, die den Notverkehr stört, wird Funkstille geboten.",
          fr: "Une station de radio qui perturbe le trafic de détresse se voit offrir le silence radio."
        },
        correct: false
      },
      {
        text: {
          de: "Dringlichkeits- und Sicherheitsverkehr dürfen wieder aufgenommen werden.",
          fr: "Le trafic d'urgence et de sécurité peut être repris."
        },
        correct: false
      },
      {
        text: {
          de: "Alle Funkstellen müssen Funkstille einhalten.",
          fr: "Toutes les stations doivent garder le silence radio."
        },
        correct: false
      }
    ]
  },
  // Frage 117
  {
    question: {
      de: "Was bedeuten die Worte SILENCE MAYDAY?",
      fr: "Que signifient les mots SILENCE MAYDAY?"
    },
    answers: [
      {
        text: {
          de: "Die Funkstelle in Not gebietet den nicht am Notverkehr beteiligten Funkstellen Funkstille.",
          fr: "La station en détresse exige le silence radio pour les stations qui ne sont pas impliquées dans le trafic de détresse."
        },
        correct: true
      },
      {
        text: {
          de: "Der Notverkehr ist beendet.",
          fr: "Le trafic de détresse est terminé."
        },
        correct: false
      },
      {
        text: {
          de: "Die am Notverkehr beteiligten Funkstellen haben Vorrang.",
          fr: "Les stations impliquées dans le trafic de détresse sont prioritaires."
        },
        correct: false
      },
      {
        text: {
          de: "Eine Notmeldung folgt.",
          fr: "Un message de détresse suit."
        },
        correct: false
      }
    ]
  },
  // Frage 118
  {
    question: {
      de: "Woraus besteht das Dringlichkeitszeichen im Sprechfunk?",
      fr: "En quoi consiste le signe d'urgence en radiotéléphonie ?"
    },
    answers: [
      {
        text: {
          de: "PAN PAN",
          fr: "PAN PAN"
        },
        correct: true
      },
      {
        text: {
          de: "MAYDAY",
          fr: "MAYDAY"
        },
        correct: false
      },
      {
        text: {
          de: "SECURITE",
          fr: "SECURITE"
        },
        correct: false
      },
      {
        text: {
          de: "URGENT",
          fr: "URGENT"
        },
        correct: false
      }
    ]
  },
  // Frage 119
  {
    question: {
      de: "Wann liegt ein Dringlichkeitsfall vor?",
      fr: "Quand y a-t-il un cas d'urgence?"
    },
    answers: [
      {
        text: {
          de: "Wenn dringende Nachrichten übermittelt werden sollen, welche die Crew oder das Schiffes betreffen.",
          fr: "Lorsque des messages urgents concernant la sécurité des personnes ou du navire doivent être transmis."
        },
        correct: true
      },
      {
        text: {
          de: "Wenn eine unmittelbare Gefährdung von Mensch oder Schiff gegeben ist oder eine Gefahrenabwehr an Land notwendig ist.",
          fr: "Lorsqu'il y a un danger immédiat pour l'homme ou le navire ou lorsqu'il y a un besoin de sécurité à terre."
        },
        correct: false
      },
      {
        text: {
          de: "Wenn dringende Nachrichten übermittelt werden sollen, welche den Empfang eines Notzeichens betreffen.",
          fr: "Si des messages urgents doivent être transmis qui concernent la réception d'un signal de détresse."
        },
        correct: false
      },
      {
        text: {
          de: "Wenn dringende Nachrichten übermittelt werden sollen, welche eine Unterstützung durch die Wasserschutzpolizei betreffen.",
          fr: "Si des messages urgents doivent être transmis, qui concernent un soutien de la police des eaux."
        },
        correct: false
      }
    ]
  },
  // Frage 120
  {
    question: {
      de: "Welche Meldungen können beispielsweise mit dem Dringlichkeitszeichen angekündigt werden?",
      fr: "Quels messages peuvent par exemple être annoncés avec le signe d'urgence?"
    },
    answers: [
      {
        text: {
          de: "Meldungen, die sich auf Krankheiten beziehen, die keine Lebensgefahr bedeuten, oder auf Schäden an Fahrzeugen, ohne dass davon eine unmittelbare Gefahr ausgeht.",
          fr: "Messages relatifs aux maladies ne présentant pas de danger pour la vie ou aux dommages causés aux véhicules sans danger immédiat."
        },
        correct: true
      },
      {
        text: {
          de: "Meldungen, die sich auf eine unmittelbare Gefährdung von Mensch oder Schiff oder eine Gefahrenabwehr an Land beziehen.",
          fr: "Messages relatifs à un danger imminent pour l'homme ou le navire ou pour la sécurité à terre."
        },
        correct: false
      },
      {
        text: {
          de: "Meldungen, die sich auf Krankheiten beziehen, die keine lebensbedrohliche Risiken bedeuten, oder auf Schäden an Fahrzeugen, von denen eine unmittelbare Gefahr ausgeht.",
          fr: "Messages relatifs à des maladies ne présentant pas de risque pour la vie ou à des dommages à des véhicules présentant un danger imminent."
        },
        correct: false
      },
      {
        text: {
          de: "Meldungen, die sich auf lebensgefährliche Krankheiten oder auf Schäden an Fahrzeugen oder Anlagen beziehen.",
          fr: "Messages relatifs aux maladies mortelles ou aux dommages causés aux véhicules ou aux installations."
        },
        correct: false
      }
    ]
  },
  // Frage 121
  {
    question: {
      de: "Welcher Funkverkehr ist einzuleiten, wenn an Bord eine Person einen Knochenbruch am Unterarm erlitten hat und ärztlicher Versorgung bedarf?",
      fr: "Quelle radiocommunication doit être établie si une personne à bord a subi une fracture de l'avant-bras et nécessite des soins médicaux?"
    },
    answers: [
      {
        text: {
          de: "Dringlichkeitsverkehr",
          fr: "Trafic d'urgence"
        },
        correct: true
      },
      {
        text: {
          de: "Notverkehr",
          fr: "Trafic de détresse"
        },
        correct: false
      },
      {
        text: {
          de: "Sicherheitsverkehr",
          fr: "Trafic de sécurité"
        },
        correct: false
      },
      {
        text: {
          de: "Routineverkehr",
          fr: "Trafic de routine"
        },
        correct: false
      }
    ]
  },
  // Frage 122
  {
    question: {
      de: "Welcher Funkverkehr ist grundsätzlich einzuleiten, wenn das Fahrzeug einen Maschinenschaden hat, der die Sicherheit des Schiffsverkehrs gefährden kann?",
      fr: "Quelle radiocommunication doit en principe être initiée si le véhicule présente une avarie de moteur susceptible de mettre en danger la sécurité de la navigation?"
    },
    answers: [
      {
        text: {
          de: "Dringlichkeitsverkehr",
          fr: "Trafic d'urgence"
        },
        correct: true
      },
      {
        text: {
          de: "Notverkehr",
          fr: "Trafic de détresse"
        },
        correct: false
      },
      {
        text: {
          de: "Sicherheitsverkehr",
          fr: "Trafic de sécurité"
        },
        correct: false
      },
      {
        text: {
          de: "Routineverkehr",
          fr: "Trafic de routine"
        },
        correct: false
      }
    ]
  },
  // Frage 124
  {
    question: {
      de: "Welche Meldungen werden mit dem Sicherheitszeichen SECURITE angekündigt?",
      fr: "Quels messages sont annoncés avec le signe de sécurité SECURITE ?"
    },
    answers: [
      {
        text: {
          de: "Nachrichten, die eine wichtige nautische Warnnachricht oder eine wichtige Wetterwarnung beinhalten.",
          fr: "Messages contenant un message d'avertissement nautique important ou un avertissement météorologique important."
        },
        correct: true
      },
      {
        text: {
          de: "Nachrichten, die eine wichtige nautische Warnnachricht oder den Radareinsatz bei schlechtem Wetter beinhalten.",
          fr: "Messages contenant un message d'avertissement nautique important ou l'utilisation d'un radar par mauvais temps."
        },
        correct: false
      },
      {
        text: {
          de: "Nachrichten, die eine wichtige Wetterwarnung oder Warnung zur Vermeidung von Umweltschäden beinhalten.",
          fr: "Messages contenant un avertissement météorologique important ou un avertissement visant à prévenir les dommages environnementaux."
        },
        correct: false
      },
      {
        text: {
          de: "Nachrichten, die eine wichtige nautische Warnnachricht oder eine dringende medizinische Meldung beinhalten.",
          fr: "Messages contenant un message d'avertissement nautique important ou un message médical urgent."
        },
        correct: false
      }
    ]
  },
  // Frage 125
  {
    question: {
      de: "Welche Meldung ist zu verbreiten, wenn ein treibender Baumstamm beobachtet wird, der eine Gefahr für den Verkehr darstellt?",
      fr: "Quel est le message à donner lorsqu'on observe un tronc d'arbre à la dérive qui présente un danger pour la circulation ?"
    },
    answers: [
      {
        text: {
          de: "Sicherheitsmeldung",
          fr: "Message de sécurité"
        },
        correct: true
      },
      {
        text: {
          de: "Notmeldung",
          fr: "Message de détresse"
        },
        correct: false
      },
      {
        text: {
          de: "Dringlichkeitsmeldung",
          fr: "Message d'urgence"
        },
        correct: false
      },
      {
        text: {
          de: "Gar keine Meldung",
          fr: "Pas de message du tout"
        },
        correct: false
      }
    ]
  },
  // Frage 126
  {
    question: {
      de: "Welche Meldung ist zu verbreiten, wenn eine vertriebene Boje beobachtet wird?",
      fr: "Quel message doit être diffusé lorsqu'une balise dérivante est observée ?"
    },
    answers: [
      {
        text: {
          de: "Sicherheitsmeldung",
          fr: "Message de sécurité"
        },
        correct: true
      },
      {
        text: {
          de: "Notmeldung",
          fr: "Message de détresse"
        },
        correct: false
      },
      {
        text: {
          de: "Dringlichkeitsmeldung",
          fr: "Message d'urgence"
        },
        correct: false
      },
      {
        text: {
          de: "Gar keine Meldung",
          fr: "Pas de message du tout"
        },
        correct: false
      }
    ]
  },
  // Frage 127
  {
    question: {
      de: "Wer entscheidet über die Art der auszusendenden Sprechfunkmeldung?",
      fr: "Qui décide du type de message radiotéléphonique à envoyer ?"
    },
    answers: [
      {
        text: {
          de: "Schiffsführer",
          fr: "Le capitaine"
        },
        correct: true
      },
      {
        text: {
          de: "Bediener der Funkanlage",
          fr: "Opérateur de l'équipement radioélectrique"
        },
        correct: false
      },
      {
        text: {
          de: "Wasserschutzpolizei",
          fr: "Police des eaux"
        },
        correct: false
      },
      {
        text: {
          de: "Revierzentrale",
          fr: "Centrale du réseau"
        },
        correct: false
      }
    ]
  }
];
