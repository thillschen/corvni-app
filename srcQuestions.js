/*
export const srcQuestions = [
Version Automne 2025 by FWE (27/12/2025)
*/
const srcQuestions = [
  // Frage 1
  {
    question: {
      de: "Der mobile Seefunkdienst“ ist ein mobiler Funkdienst …",
      fr: "„Le service mobile maritime“ est un service de radiocommunication mobile …"
    },
    answers: [
      {
        text: {
          de: "zwischen Küstenfunkstellen und Seefunkstellen bzw. zwischen Seefunkstellen untereinander.",
          fr: "Entre les stations côtières et les stations maritimes resp. entre les stations maritimes entre elles."
        },
        correct: true
      },
      {
        text: {
          de: "zwischen tragbaren Funkstellen an Bord eines Seefahrzeuges.",
          fr: "Entre les stations portables à bord d'un navire."
        },
        correct: false
      },
      {
        text: {
          de: "ausschließlich zwischen Seefunkstellen.",
          fr: "Exclusivement entre les stations maritimes."
        },
        correct: false
      },
      {
        text: {
          de: "zwischen Funkstellen, für die keine Frequenzzuteilungsurkunde notwendig ist.",
          fr: "Entre les stations pour lesquelles aucune licence d'assignation de fréquence n'est requise."
        },
        correct: false
      }
    ]
  },
  // Frage 2
  {
    question: {
      de: "Welche Funktion hat das „GMDSS“ (Global Maritime Distress and Safety System) ?",
      fr: "Quelle est la fonction du \"GMDSS\" (Global Maritime Distress and Safety System) ?"
    },
    answers: [
      {
        text: {
          de: "Koordinierung der Alarmierung von Seefunkstellen im Seenotfall",
          fr: "Coordination de l'alerte des stations maritimes en cas de détresse en mer"
        },
        correct: false
      },
      {
        text: {
          de: "Positionsbestimmung des Havaristen durch geostationäre Satelliten",
          fr: "Positionnement du navire naufragé par des satellites géostationnaires"
        },
        correct: false
      },
      {
        text: {
          de: "Störungsfreier Funkverkehr im Seenotfall",
          fr: "Radiocommunications sans interférence en cas d'une détresse maritime"
        },
        correct: false
      },
      {
        text: {
          de: "Hilfe in Seenotfällen und Sicherung der Schifffahrt durch schnelle und genaue Alarmierung im Seenotfall",
          fr: "Assistance en cas de détresse maritime et sauvegarde de la navigation par une alerte rapide et précise en cas d'urgence maritime"
        },
        correct: true
      }
    ]
  },
  // Frage 3
  {
    question: {
      de: "Wozu dient das weltweite Seenot- und Sicherheitsfunksystem (GMDSS)?",
      fr: "Que peut-on faire avec le système mondial de détresse et de sécurité en mer (SMDSM) ?"
    },
    answers: [
      {
        text: {
          de: "Schnelle Alarmierung nur in Notfällen",
          fr: "Alerte rapide uniquement en cas de détresse"
        },
        correct: false
      },
      {
        text: {
          de: "Schnelle und genaue Alarmierung in Not-, Dringlichkeits- und Sicherheitsfällen",
          fr: "Alerte rapide et précise en cas de détresse, d'urgence et de sécurité"
        },
        correct: true
      },
      {
        text: {
          de: "Schnelle und genaue Alarmierung in Not- und Dringlichkeitsfällen",
          fr: "Alerte rapide et précise en cas de détresse et d'urgence"
        },
        correct: false
      },
      {
        text: {
          de: "Schnelle und genaue Alarmierung in Not- und Sicherheitsfällen",
          fr: "Alerte rapide et précise en cas de détresse et de sécurité"
        },
        correct: false
      }
    ]
  },
  // Frage 4
  {
    question: {
      de: "Welche Bezeichnungen tragen die Seegebiete, in denen für Schiffe eine bestimmte Funkausrüstung international vorgeschrieben ist?",
      fr: "Quelles sont les désignations des zones maritimes où les navires sont tenus de disposer de certains équipements radioélectriques au niveau international ?"
    },
    answers: [
      {
        text: {
          de: "A, B, C, D",
          fr: "A, B, C, D"
        },
        correct: false
      },
      {
        text: {
          de: "NAVAREAS",
          fr: "NAVAREAS"
        },
        correct: false
      },
      {
        text: {
          de: "A1, A2, A3, A4",
          fr: "A1, A2, A3, A4"
        },
        correct: true
      },
      {
        text: {
          de: "Küstengewässer, küstennahe Seegewässer, Hohe See",
          fr: "Eaux côtières, eaux de mer côtières, haute mer"
        },
        correct: false
      }
    ]
  },
  // Frage 5
  {
    question: {
      de: "Aufgaben hat die Internationale Fernmeldeunion (International Telecommunication Union [ITU])?",
      fr: "Quelles sont les tâches de l'Union internationale des télécommunications (UIT) ?"
    },
    answers: [
      {
        text: {
          de: "Die Internationale Fernmeldeunion (ITU) legt für alle Nationen der UN, die weltweit Seeschifffahrt betreiben, die Mindeststandards hinsichtlich der Funkausrüstung von Seeschiffen fest.",
          fr: "L'Union internationale des télécommunications (UIT) ﬁxe les normes minimales en matière d'équipements radioélectriques marins pour tous les pays des Nations unies opérant en mer dans le monde entier."
        },
        correct: false
      },
      {
        text: {
          de: "Die Internationale Fernmeldeunion (ITU) legt für alle Länder der Europäischen Union, die weltweit Seeschifffahrt betreiben, die Mindeststandards hinsichtlich der Funkausrüstung von Seeschiffen fest.",
          fr: "L'Union internationale des télécommunications (UIT) ﬁxe les normes minimales en matière d'équipements radioélectriques marins pour tous les pays de l’Union Européenne opérant en mer dans le monde entier."
        },
        correct: false
      },
      {
        text: {
          de: "Die Internationale Fernmeldeunion (ITU) legt die grundlegenden Regelungen für die internationale Telekommunikation fest.",
          fr: "L'Union internationale des télécommunications (UIT) ﬁxe les règles de base des télécommunications internationales."
        },
        correct: true
      },
      {
        text: {
          de: "Die Internationale Fernmeldeunion (ITU) rechnet die Gebühren von weltweiten Seefunkgesprächen ab.",
          fr: "L'Union internationale des télécommunications (UIT) facture les appels des radiocommunications maritimes mondiaux"
        },
        correct: false
      }
    ]
  },
  // Frage 6
  {
    question: {
      de: "Was regelt die Radio Regulations [RR] ?",
      fr: "Que régit le Règlement des radiocommunications (RR) ?"
    },
    answers: [
      {
        text: {
          de: "Die Vollzugsverordnung für den Funkdienst (RR) regelt u. a. die Zuweisung von Frequenzbereichen an die Funkdienste und die Betriebsverfahren im Seefunkdienst.",
          fr: "Le règlement des radiocommunications (RR) régit, entre autres, l'attribution des gammes de fréquences aux services de radiocommunication et les procédures d'exploitation du service de radiocommunication maritime."
        },
        correct: true
      },
      {
        text: {
          de: "Die Vollzugsordnung für den Funkdienst (RR) regelt die Ausrüstung von Seeschiffen bezüglich der Funkeinrichtung.",
          fr: "Le règlement des radiocommunications (RR) régit l'équipement des navires de mer en ce qui concerne les équipements radio."
        },
        correct: false
      },
      {
        text: {
          de: "Die Vollzugsverordnung für den Funkdienst (RR) regelt den freien Funkverkehr zwischen der Seefahrt betreibenden Nationen.",
          fr: "Le règlement des radiocommunications (RR) régit la libre circulation des radiocommunications entre les nations maritimes."
        },
        correct: false
      },
      {
        text: {
          de: "Die Vollzugsverordnung für den Funkdienst (RR) regelt die Benutzung von Radaranlagen auf Seeschiffen auf See und in Häfen.",
          fr: "Le règlement des radiocommunications (RR) régit l'utilisation des équipements radar sur les navires de mer en mer et dans les ports."
        },
        correct: false
      }
    ]
  },
  // Frage 7
  {
    question: {
      de: "Was ist eine „Küstenfunkstelle“?",
      fr: "Qu'est-ce qu'une \"station côtière\" ?"
    },
    answers: [
      {
        text: {
          de: "Funkstelle an Bord eines Schiffes im Küstenbereich, über die wichtigen Informationen für die Seeschifffahrt verbreitet werden",
          fr: "Station radioélectrique à bord d'un navire dans la zone côtière par laquelle sont diƯusées des informations importantes pour la navigation maritime"
        },
        correct: false
      },
      {
        text: {
          de: "Funkstelle des Rundfunkdienstes zur Übermittlung von Wetternachrichten für die Schifffahrt",
          fr: "Station radioélectrique du service de radiodiƯusion pour la transmission de messages météorologiques pour la navigation"
        },
        correct: false
      },
      {
        text: {
          de: "Ortsfeste Funkstelle des mobilen Seefunkdienstes",
          fr: "Station ﬁxe du service mobile maritime"
        },
        correct: true
      },
      {
        text: {
          de: "Funkstelle an Bord eines Schiffes für den Empfang von Funkgesprächen aus dem Mobilfunknetz",
          fr: "Station radioélectrique à bord d'un navire pour recevoir des appels radio du réseau de radiocommunication mobile"
        },
        correct: false
      }
    ]
  },
  // Frage 8
  {
    question: {
      de: "Was versteht man unter „Seegebiet“ im GMDSS?",
      fr: "Qu'est-ce qu'une \"zone maritime\" dans le SMDSM ?"
    },
    answers: [
      {
        text: {
          de: "International festgelegtes Seewarngebiet",
          fr: "Zone d'alerte maritime déﬁnie au niveau international"
        },
        correct: false
      },
      {
        text: {
          de: "Festgelegtes Seegebiet",
          fr: "Zone maritime déﬁnie"
        },
        correct: true
      },
      {
        text: {
          de: "Im NAVTEX bestimmtes Seegebiet",
          fr: "Zone maritime déﬁnie dans NAVTEX"
        },
        correct: false
      },
      {
        text: {
          de: "Weltweites Raster zum schnellen Auffinden von verunglückten Fahrzeugen",
          fr: "Réseau mondial pour la localisation rapide des véhicules accidentés"
        },
        correct: false
      }
    ]
  },
  // Frage 9
  {
    question: {
      de: "Eine Yacht befindet sich in einem Seegebiet, das von der Sprechfunkreichweite einer UKW- Küstenfunkstelle abgedeckt wird, die ununterbrochen für DSC-Alarmierungen zur Verfügung steht. In welchem Seegebiet befindet sich das Fahrzeug?",
      fr: "Un yacht est situé dans une zone maritime couverte par la portée d'une station côtière VHF qui est disponible en permanence pour les alertes ASN. Dans quelle zone maritime le véhicule est-il situé ?"
    },
    answers: [
      {
        text: {
          de: "Seegebiet A2",
          fr: "Zone maritime A2"
        },
        correct: false
      },
      {
        text: {
          de: "Seegebiet A3",
          fr: "Zone maritime A3"
        },
        correct: false
      },
      {
        text: {
          de: "Seegebiet A4",
          fr: "Zone maritime A4"
        },
        correct: false
      },
      {
        text: {
          de: "Seegebiet A1",
          fr: "Zone maritime A1"
        },
        correct: true
      }
    ]
  },
  // Frage 10
  {
    question: {
      de: "Welches sind die satellitengestützten Alarmierungssysteme im Weltweiten Seenot- und Sicherheitsfunksystem (GMDSS)?",
      fr: "Quels sont les systèmes d'alerte par satellite du système mondial de détresse et de sécurité en mer (SMDSM) ?"
    },
    answers: [
      {
        text: {
          de: "COSPAS-SARSAT",
          fr: "COSPAS-SARSAT"
        },
        correct: true
      },
      {
        text: {
          de: "Eutelsat, Globalstar",
          fr: "Eutelsat, Globalstar"
        },
        correct: false
      },
      {
        text: {
          de: "EPIRB, AIS",
          fr: "EPIRB, AIS"
        },
        correct: false
      },
      {
        text: {
          de: "DSC, COSPAS-SARSAT, Inmarsat",
          fr: "DSC, COSPAS-SARSAT, Inmarsat"
        },
        correct: false
      }
    ]
  },
  // Frage 11
  {
    question: {
      de: "Was versteht man unter „AIS“?",
      fr: "Qu'entend-on par \"AIS\" ?"
    },
    answers: [
      {
        text: {
          de: "Automatische Aussendung der Kennung eines Seeschiffes jede Minute bzw. beim Loslassen der Sprechtaste",
          fr: "Transmission automatique de l'identiﬁcation d'un navire de mer toutes les minutes ou lorsque le bouton PTT est relâché"
        },
        correct: false
      },
      {
        text: {
          de: "Allgemeines Informationssystem für die Seeschifffahrt",
          fr: "Système général d'information pour la navigation maritime"
        },
        correct: false
      },
      {
        text: {
          de: "Identifizierung eines Schiffes mit Hilfe von Radarpeilungen und deren Weitergabe an die Schifffahrt zur Kollisionsverhütung",
          fr: "Identiﬁcation d'un navire au moyen de relèvements radar et leur transmission à la navigation pour la prévention des collisions"
        },
        correct: false
      },
      {
        text: {
          de: "Automatisches Schiffsidentifizierungs- und Überwachungssystem, das statische und dynamische Schiffsdaten auf UKW überträgt",
          fr: "Système automatique d'identiﬁcation et de surveillance des navires transmettant des données statiques et dynamiques sur les navires par VHF"
        },
        correct: true
      }
    ]
  },
  // Frage 12
  {
    question: {
      de: "Was bedeutet „ETA“?",
      fr: "Que signiﬁe \"ETA\" ?"
    },
    answers: [
      {
        text: {
          de: "Voraussichtliche Abfahrtszeit",
          fr: "Heure de départ estimée"
        },
        correct: false
      },
      {
        text: {
          de: "Voraussichtliche Gesamtfahrtzeit",
          fr: "Durée totale estimée du voyage"
        },
        correct: false
      },
      {
        text: {
          de: "Voraussichtliche Ankunftszeit",
          fr: "Heure d'arrivée estimée"
        },
        correct: true
      },
      {
        text: {
          de: "Voraussichtliche Restfahrtzeit",
          fr: "Estimation du temps de voyage restant"
        },
        correct: false
      }
    ]
  },
  // Frage 13
  {
    question: {
      de: "Wonach richten sich die Zeitangaben im Seefunkdienst?",
      fr: "Sur quoi se basent les données horaires du service radiotéléphonique maritime ?"
    },
    answers: [
      {
        text: {
          de: "Bordzeit, berichtigt nach Sommer- oder Winterzeit",
          fr: "Heure à bord, corrigée pour l'heure d'été ou d'hiver"
        },
        correct: false
      },
      {
        text: {
          de: "Greenwich-Zeit (Greenwich Mean Time [GMT])",
          fr: "Temps moyen de Greenwich [GMT]"
        },
        correct: false
      },
      {
        text: {
          de: "Ortszeit, bezogen auf den Standort des Schiffes (Local Time [LT])",
          fr: "Heure locale, liée à la localisation du navire (heure locale [LT])"
        },
        correct: false
      },
      {
        text: {
          de: "Koordinierte Weltzeit (Universal Time Co-ordinated [UTC])",
          fr: "Temps universel coordonné [UTC]"
        },
        correct: true
      }
    ]
  },
  // Frage 14
  {
    question: {
      de: "Welche Bedeutung hat die Zeitangabe „LT“ (Local Time)?",
      fr: "Quelle est la signiﬁcation de la spéciﬁcation de l'heure \"LT\" (Local Time) ?"
    },
    answers: [
      {
        text: {
          de: "Zeitzone entsprechend der geografischen Breite des Schiffsortes",
          fr: "Fuseau horaire correspondant à la latitude de l'emplacement du navire"
        },
        correct: false
      },
      {
        text: {
          de: "Ortszeit, bezogen auf den Standort des Schiffes",
          fr: "Heure locale, par rapport à la position du navire"
        },
        correct: true
      },
      {
        text: {
          de: "Zeit, die bei Funkaussendungen in einem bestimmten Seegebiet zu verwenden ist",
          fr: "Heure à utiliser pour les transmissions radio dans une zone maritime donnée"
        },
        correct: false
      },
      {
        text: {
          de: "Zeit, die automatisch durch ein an die Funkanlage angeschlossenes GPS-Gerät übermittelt wird",
          fr: "Heure transmise automatiquement par un dispositif GPS connecté à l'installation radio"
        },
        correct: false
      }
    ]
  },
  // Frage 15
  {
    question: {
      de: "Was ist eine „Seefunkstelle“?",
      fr: "Qu'est-ce qu'une \"station de navire\" ?"
    },
    answers: [
      {
        text: {
          de: "Typgeprüfte Funkstelle, die kein ATIS-Signal aussendet",
          fr: "Station de radio agréée ne transmettant pas de signal ATIS"
        },
        correct: false
      },
      {
        text: {
          de: "Seefunkgerät samt Antenne, das im UKW- bzw. MW- und KW-Bereich betrieben wird",
          fr: "Appareils et antennes de radiotéléphonie maritime fonctionnant dans les bandes VHF, HF et MF"
        },
        correct: false
      },
      {
        text: {
          de: "Funkstelle des mobilen Seefunkdienstes an Bord eines nicht dauernd verankerten Seefahrzeuges",
          fr: "Station radio du service mobile maritime à bord d'un navire non amarré en permanence"
        },
        correct: true
      },
      {
        text: {
          de: "Funkstelle, die am GMDSS teilnehmen darf",
          fr: "Station de radio autorisée à participer au SMDSM"
        },
        correct: false
      }
    ]
  },
  // Frage 16
  {
    question: {
      de: "Welche Urkunde für die Seefunkstelle muss auf einem Sportfahrzeug mitgeführt werden?",
      fr: "Quel document d’une station de navire doit être à bord du navire de plaisance ?"
    },
    answers: [
      {
        text: {
          de: "Zuteilungsurkunde und Sprechfunkzeugnis SRC (im Original)",
          fr: "La licence de la station radiotéléphonique et le certiﬁcat d’opérateur radiotéléphonique maritime (en original)"
        },
        correct: true
      },
      {
        text: {
          de: "Lizenz (in Kopie)",
          fr: "La licence (en copie)"
        },
        correct: false
      },
      {
        text: {
          de: "Gerätekonformitätszeugnis (im Original)",
          fr: "Le certiﬁcat de conformité de l’équipement (en original)"
        },
        correct: false
      },
      {
        text: {
          de: "Gerätekonformitätszeugnis (in Kopie)",
          fr: "Le certiﬁcat de conformité de l’équipement (en copie)"
        },
        correct: false
      }
    ]
  },
  // Frage 17
  {
    question: {
      de: "Welches Funkzeugnis ist auf einem mit einer Seefunkanlage ausgerüsteten Sportfahrzeug unter luxemburgischer Flagge für den Schiffsführer vorgeschrieben?",
      fr: "Quel certiﬁcat d’opérateur est requis pour le commandant de bord d’un navire de sport sous pavillon luxembourgeois équipé d'un système radiotéléphonique maritime ?"
    },
    answers: [
      {
        text: {
          de: "Ein Funkzeugnis, das zum Bedienen der eingebauten Anlage berechtigt, z. B. SRC oder LRC",
          fr: "Un certiﬁcat radio autorisant l’utilisation de l'équipement installé, par exemple SRC ou LRC"
        },
        correct: true
      },
      {
        text: {
          de: "Ein SRC bis zur Grenze der Hoheitsgewässer, darüber hinaus ein LRC",
          fr: "Un SRC jusqu'à la limite des eaux territoriales, au-delà un LRC"
        },
        correct: false
      },
      {
        text: {
          de: "Keines, es genügt, wenn eine Person an Bord ist, welche die Funkanlage bedienen darf",
          fr: "Aucune, il suƯit qu'il y ait une personne à bord qui soit autorisée à faire fonctionner l’équipement radioélectrique"
        },
        correct: false
      },
      {
        text: {
          de: "Für die Bedienung einer MW/KW-Anlage ist das LRC vorgeschrieben, für die Bedienung einer UKW-Anlage zusätzlich das SRC",
          fr: "Le LRC est prescrit pour l'exploitation d'un système à ondes MF/HF, pour l'exploitation d'un système VHF en plus le SRC"
        },
        correct: false
      }
    ]
  },
  // Frage 18
  {
    question: {
      de: "Die Lizenz zum Betreiben einer Seefunkstelle wird in Luxemburg ausgestellt durch …",
      fr: "La licence d'une station de navire est délivrée au Luxembourg par ..."
    },
    answers: [
      {
        text: {
          de: "Das luxemburgische Kommissariat für maritime Angelegenheiten (CAM)",
          fr: "Le Commissariat luxembourgeois aux aƯaires maritimes (CAM)"
        },
        correct: false
      },
      {
        text: {
          de: "Das Transportministerium",
          fr: "Le ministère de Transports"
        },
        correct: false
      },
      {
        text: {
          de: "Die luxemburgische Regulierungsbehörde (ILR)",
          fr: "L´Institut Luxembourgeois de Régulation (ILR)"
        },
        correct: true
      },
      {
        text: {
          de: "Das luxemburgische Wasserwirtschaftsamt",
          fr: "L’Administration de la gestion de l‘eau"
        },
        correct: false
      }
    ]
  },
  // Frage 19
  {
    question: {
      de: "Welche Funkanlagen darf der Inhaber eines Beschränkt Gültigen Funkbetriebszeugnisses (Short Range Certificate [SRC]) bedienen?",
      fr: "Quel équipement radioélectrique le titulaire d'un certiﬁcat de courte portée (Short Range Certiﬁcate [SRC]) peut-il utiliser ?"
    },
    answers: [
      {
        text: {
          de: "UKW-Funkanlagen für See- und Luftfunkstellen",
          fr: "Installations radioélectriques VHF pour les stations de navires et d’aéronefs"
        },
        correct: false
      },
      {
        text: {
          de: "UKW-Funkanlagen auf Sportbooten im Seefunkdienst und Binnenschifffahrtsfunk",
          fr: "Émetteurs et récepteurs radiotéléphoniques VHF sur les bateaux de plaisance du service maritime et ﬂuvial"
        },
        correct: false
      },
      {
        text: {
          de: "UKW-Funkanlagen auf funkausrüstungspflichtigen und nicht funkausrüstungspflichtigen Seeschiffen",
          fr: "Installations radio VHF sur les navires, équipés ou non d'un équipement radio"
        },
        correct: false
      },
      {
        text: {
          de: "UKW-Funkanlagen im Seefunkdienst auf nicht funkausrüstungspflichtigen Fahrzeugen",
          fr: "Equipement radiotéléphonique VHF pour le service de radiotéléphonie maritime sur les navires ne nécessitant pas d'équipement radioélectriques"
        },
        correct: true
      }
    ]
  },
  // Frage 20
  {
    question: {
      de: "Welche Sendeleistungen lassen sich bei einer fest installierten UKW-Seefunkanlage schalten?",
      fr: "Quelles puissances d’émission peuvent être sélectionnées pour une station radiotéléphonique VHF ﬁxe ?"
    },
    answers: [
      {
        text: {
          de: "25 Watt ou/oder maximum 50 Watt",
          fr: "25 Watt ou/oder maximum 50 Watt"
        },
        correct: false
      },
      {
        text: {
          de: "0,1 Watt ou/oder maximum 2,5 Watt",
          fr: "0,1 Watt ou/oder maximum 2,5 Watt"
        },
        correct: false
      },
      {
        text: {
          de: "1 Watt ou/oder maximum 12 Watt",
          fr: "1 Watt ou/oder maximum 12 Watt"
        },
        correct: false
      },
      {
        text: {
          de: "1 Watt ou/oder maximum 25 Watt",
          fr: "1 Watt ou/oder maximum 25 Watt"
        },
        correct: true
      }
    ]
  },
  // Frage 21
  {
    question: {
      de: "Welche gesetzlichen Anforderungen sind für den Betrieb einer luxemburgischen Seefunkstelle (Sportfahrzeug) zu erfüllen?",
      fr: "Quelles sont les exigences légales à remplir pour l'exploitation d'une station de navire sur un navire de plaisance sous pavillon luxembourgeois ?"
    },
    answers: [
      {
        text: {
          de: "Schiffsfunklizenz, ausreichendes Seefunkzeugnis und Sportbootführerschein des Fahrzeugführers",
          fr: "Licence de station de navire, certiﬁcat d’opérateur maritime suƯisant et un permis de conduire d’un navire de plaisance du conducteur"
        },
        correct: false
      },
      {
        text: {
          de: "Schiffsfunklizenz, für den Seefunkdienst zugelassene Funkgeräte und ausreichendes Seefunkzeugnis an Bord",
          fr: "Licence de station de navire, équipement radiotéléphonique pour le service maritime conforme à la législation en vigueur, certiﬁcat d’opérateur maritime à bord"
        },
        correct: true
      },
      {
        text: {
          de: "Schiffsfunklizenz und ein ausreichendes Seefunkzeugnis des Fahrzeugführers",
          fr: "Licence de station de navire et un certiﬁcat d’opérateur maritime suƯisant du conducteur"
        },
        correct: false
      },
      {
        text: {
          de: "Schiffsfunklizenz und für den Seefunkdienst zugelassene oder in Verkehr gebrachte Funkgeräte und ein Sportbootführerschein des Fahrzeugführers",
          fr: "Licence de station de navire, des équipements radioélectriques mis sur le marché pour le service maritime et un permis de conduire d’un navire de plaisance du conducteur"
        },
        correct: false
      }
    ]
  },
  // Frage 22
  {
    question: {
      de: "Was und zu welchem Zweck muss ein Schiffseigner bei Änderung des Schiffsnamens in Bezug auf seine Seefunkstelle veranlassen?",
      fr: "En ce qui concerne sa station de navire, que doit faire le propriétaire d’un navire lorsqu’il change de nom de navire, et dans quel but ?"
    },
    answers: [
      {
        text: {
          de: "Namensänderung der luxemburgischen Regulierungsbehörde (ILR) schriftlich mitteilen zwecks Änderung seiner Seefunklizenz",
          fr: "Notiﬁer par écrit à l’Institut Luxembourgeois de Régulation (ILR) un changement de nom en vue de la modiﬁcation de sa licence de station de navire"
        },
        correct: true
      },
      {
        text: {
          de: "Namensänderung dem Kommissariat für maritime Angelegenheiten (CAM) schriftlich mitteilen zwecks Änderung der Gerätezulassungsurkunde",
          fr: "Notiﬁer par écrit au Commissariat des aƯaires maritimes (CAM) le changement de nom aux ﬁns de la modiﬁcation du certiﬁcat d'agrément de l'équipement"
        },
        correct: false
      },
      {
        text: {
          de: "Namensänderung dem Kommissariat für maritime Angelegenheiten (CAM) schriftlich mitteilen zwecks Änderung des Kennzeichenausweises",
          fr: "Notiﬁer par écrit au Commissariat des aƯaires maritimes (CAM) le changement de nom en vue de la modiﬁcation du certiﬁcat d’Immatriculation"
        },
        correct: false
      },
      {
        text: {
          de: "Namensänderung der Zentralen Verwaltungsstelle schriftlich mitteilen zwecks Änderung des Kennzeichenausweises",
          fr: "Notiﬁer par écrit au Guichet unique le changement de nom en vue de la modiﬁcation du certiﬁcat d’Immatriculation"
        },
        correct: false
      }
    ]
  },
  // Frage 23
  {
    question: {
      de: "Welche Art von Funkstelle hat z. B. das Rufzeichen „LXTW“ und/oder « LXTW1 »?",
      fr: "Quel type de station a par exemple l’indicatif d’appel « LXTW » et/ou « LXTW1 » ?"
    },
    answers: [
      {
        text: {
          de: "Küstenfunkstelle des Schiffsmeldedienstes (SMD)",
          fr: "Station côtière du service de notiﬁcation des navires (SMD)"
        },
        correct: false
      },
      {
        text: {
          de: "Seefunkstelle an Bord eines luxemburgischen Schiffes, eingetragen in einem Seeschiffsregister",
          fr: "Station de radiocommunication à bord d'un navire luxembourgeois, inscrit dans un registre de navigation maritime"
        },
        correct: true
      },
      {
        text: {
          de: "Funkstelle des Nichtöffentlichen Funkdienstes",
          fr: "Station de radiocommunicaion du service restreint (non public)"
        },
        correct: false
      },
      {
        text: {
          de: "Funkstelle an Bord eines SAR-Hubschraubers",
          fr: "Station de radiocommunication à bord d'un hélicoptère de recherche et de sauvetage"
        },
        correct: false
      }
    ]
  },
  // Frage 24
  {
    question: {
      de: "Wenn ein Funkgerät in Europa ordnungsgemäß in Verkehr gebracht worden ist, trägt es...",
      fr: "Lorsque les équipements de radiocommunications maritime ont été correctement mis sur le marché européen, ils portent..."
    },
    answers: [
      {
        text: {
          de: "eine Seriennummer",
          fr: "Un numéro de série"
        },
        correct: false
      },
      {
        text: {
          de: "Ein Prüfzeichen „geprüfte Sicherheit (GS)“",
          fr: "Une marque de contrôle relative à la vériﬁcation de la sécurité"
        },
        correct: false
      },
      {
        text: {
          de: "das FCC-Prüfzeichen",
          fr: "La marque de contrôle FCC"
        },
        correct: false
      },
      {
        text: {
          de: "das CE-Zeichen",
          fr: "Le marquage CE"
        },
        correct: true
      }
    ]
  },
  // Frage 25
  {
    question: {
      de: "Das Abhörverbot und das Fernmeldegeheimnis sind geregelt...",
      fr: "L’interdiction d’écoute et le secret des télécommunications sont régis par…"
    },
    answers: [
      {
        text: {
          de: "im modifizierten Gesetz vom 30. Mai 2005 bezüglich der Organisation der Frequenzverwaltung",
          fr: "La loi modiﬁée du 30 mai 2005 portant organisation de la gestion des ondes radioélectriques"
        },
        correct: false
      },
      {
        text: {
          de: "in der maritimen Verordnung vom 9. November 1990 hinsichtlich der Schaffung eines maritimen Registers",
          fr: "L’acte maritime du 9 novembre 1990 relatif à la création du registre maritime"
        },
        correct: false
      },
      {
        text: {
          de: "im der Funkverordnung der ITU",
          fr: "Le règlement des radiocommunication (RR) de l’UIT"
        },
        correct: true
      },
      {
        text: {
          de: "im Gesetz vom 27. Februar 2011 hinsichtlich Telekommunikations-Netze und -Dienste",
          fr: "La loi du 27 février 2011 sur les réseaux et les services de communications électroniques"
        },
        correct: false
      }
    ]
  },
  // Frage 26
  {
    question: {
      de: "Welche Nachrichten dürfen uneingeschränkt aufgenommen und verbreitet werden?",
      fr: "Quels messages peuvent être enregistrés et diƯusés sans restriction ?"
    },
    answers: [
      {
        text: {
          de: "Aussendungen, die „An alle Funkstellen“ gerichtet sind",
          fr: "Les transmissions qui sont adressées « A toutes les stations de radio »"
        },
        correct: true
      },
      {
        text: {
          de: "Aussendungen, die von allgemeinem Interesse sind",
          fr: "Les émissions d'intérêt général"
        },
        correct: false
      },
      {
        text: {
          de: "Aussendungen im öffentlichen Seefunkdienst",
          fr: "Les transmissions radioélectriques dans le service public maritime"
        },
        correct: false
      },
      {
        text: {
          de: "Aussendungen im Seefunkdienst dürfen uneingeschränkt aufgenommen und verbreitet werden",
          fr: "Les transmissions du service de radiocommunication maritime peuvent être enregistrées et diƯusées sans restriction"
        },
        correct: false
      }
    ]
  },
  // Frage 27
  {
    question: {
      de: "Wer ist beim Betrieb einer Seefunkstelle auf einem Sportboot zur Einhaltung des Fernmeldegeheimnisses und des Abhörverbots verpflichtet?",
      fr: "Qui est tenu de respecter le secret des télécommunications et l'interdiction d'écoute lors de l'exploitation d'une station de radiocommunication maritime sur un bateau de plaisance ?"
    },
    answers: [
      {
        text: {
          de: "Alle Personen, die ständig an Bord sind.",
          fr: "Toutes les personnes qui se trouvent en permanence à bord."
        },
        correct: false
      },
      {
        text: {
          de: "Alle Personen, die eine Seefunkstelle beaufsichtigen, bedienen oder Kenntnis über öffentlichen Nachrichtenaustausch erlangt haben.",
          fr: "Toutes les personnes qui supervisent ou exploitent une station de radiocommunication maritime ou qui ont acquis des connaissances en matière d’échange de radiocommunications publiques."
        },
        correct: true
      },
      {
        text: {
          de: "Alle Personen, die das Funkgerät bedienen können.",
          fr: "Toutes les personnes en mesure d’utiliser la radio."
        },
        correct: false
      },
      {
        text: {
          de: "Alle Personen, die vom Schiffsführer ausdrücklich dazu verpflichtet worden sind.",
          fr: "Toutes les personnes qui y ont expressément été astreintes par le commandant de bord."
        },
        correct: false
      }
    ]
  },
  // Frage 28
  {
    question: {
      de: "Welches technische Verfahren im GMDSS ermöglicht einer Seefunkstelle die Verkehrsaufnahme in den Richtungen Schiff-Küstenfunkstelle und Schiff–Schiff?",
      fr: "Quel procédé technique du SMDSM permet à une station de radiocommunications maritime de capter le traﬁc dans les directions navire- station côtière et navire-navire ?"
    },
    answers: [
      {
        text: {
          de: "NAVTEX",
          fr: "NAVTEX"
        },
        correct: false
      },
      {
        text: {
          de: "COSPAS-SARSAT",
          fr: "COSPAS-SARSAT"
        },
        correct: false
      },
      {
        text: {
          de: "ASN / DSC",
          fr: "ASN / DSC"
        },
        correct: true
      },
      {
        text: {
          de: "SMS",
          fr: "SMS"
        },
        correct: false
      }
    ]
  },
  // Frage 29
  {
    question: {
      de: "Was bedeutet „DSC“ im mobilen Seefunkdienst?",
      fr: "Que signiﬁe \"ASN\" dans le service mobile maritime ?"
    },
    answers: [
      {
        text: {
          de: "Digitaler Selektivruf",
          fr: "Appel sélectif numérique"
        },
        correct: true
      },
      {
        text: {
          de: "Funküberwachung auf zwei Funkkanälen (Dual Watch)",
          fr: "Surveillance radio sur deux canaux radio (double veille)"
        },
        correct: false
      },
      {
        text: {
          de: "Gegensprechen auf zwei Frequenzen im Gegensatz zu Wechselsprechen auf einer Frequenz",
          fr: "Communication bidirectionnelle sur deux fréquences, par opposition à la communication bidirectionnelle sur une fréquence."
        },
        correct: false
      },
      {
        text: {
          de: "Digitales System für die Telekommunikation an Bord",
          fr: "Système numérique pour la télécommunication à bord"
        },
        correct: false
      }
    ]
  },
  // Frage 30
  {
    question: {
      de: "Welche Auswirkung auf die Betriebsdauer einer Batterie hat der Sendebetrieb einer Seefunkanlage im Vergleich zum Empfangsbetrieb?",
      fr: "Quelle répercussion le mode de transmission d'un système de radiocommunications maritime a-t-il sur la durée de fonctionnement d'une batterie par rapport au mode de réception ?"
    },
    answers: [
      {
        text: {
          de: "Betriebsdauer wird halbiert",
          fr: "Le temps de fonctionnement est réduit de moitié"
        },
        correct: false
      },
      {
        text: {
          de: "Betriebsdauer wird verkürzt",
          fr: "Le temps de fonctionnement est réduit"
        },
        correct: true
      },
      {
        text: {
          de: "Betriebsdauer wird verlängert",
          fr: "Le temps de fonctionnement est prolongé"
        },
        correct: false
      },
      {
        text: {
          de: "Betriebsdauer bleibt gleich",
          fr: "Le temps de fonctionnement reste le même"
        },
        correct: false
      }
    ]
  },
  // Frage 31
  {
    question: {
      de: "Welche Eigenschaften des „GPS“ sind für eine GMDSS-Funkanlage von besonderer Bedeutung?",
      fr: "Quelles sont les propriétés du \"GPS\" qui revêtent une importance particulière pour un système de radiocommunications SMDSM ?"
    },
    answers: [
      {
        text: {
          de: "Mit Hilfe von GPS ist ein weltweiter Funkverkehr über Satelliten zwischen Schiffen untereinander bzw. mit Küstenfunkstellen möglich.",
          fr: "Grâce au GPS, les radiocommunications mondiales par satellite entre navires ou avec des stations côtières sont possibles."
        },
        correct: false
      },
      {
        text: {
          de: "Mit Hilfe von GPS besteht die Möglichkeit der Kommunikation über Inmarsat bzw. COSPAS- SARSAT.",
          fr: "Grâce au GPS, les radiocommunications via Inmarsat ou COSPAS- SARSAT sont possibles."
        },
        correct: false
      },
      {
        text: {
          de: "Mit Hilfe von GPS kann die genaue Position des Schiffes bestimmt und übermittelt werden. Ebenso kann die genaue Zeit bestimmt werden.",
          fr: "Grâce au GPS, la position exacte du navire peut être déterminée et transmise. L'heure exacte peut également être déterminée."
        },
        correct: true
      },
      {
        text: {
          de: "Mit Hilfe von GPS erfolgt die Kommunikation mit der Rettungsleitstelle über Satelliten",
          fr: "Grâce au GPS, les radiocommunications avec le centre de contrôle des secours sont possibles par satellite."
        },
        correct: false
      }
    ]
  },
  // Frage 32
  {
    question: {
      de: "Welcher UKW-Kanal wird im Weltweiten Seenot- und Sicherheitsfunksystem (GMDSS) für die digitale Ankündigung einer Dringlichkeitsmeldung benutzt?",
      fr: "Quel canal VHF est utilisé dans le système mondial de détresse et de sécurité en mer (SMDSM) pour l'annonce numérique d'un message d’urgence ?"
    },
    answers: [
      {
        text: {
          de: "Canal 16",
          fr: "Canal 16"
        },
        correct: false
      },
      {
        text: {
          de: "Canal 10",
          fr: "Canal 10"
        },
        correct: false
      },
      {
        text: {
          de: "Canal 70",
          fr: "Canal 70"
        },
        correct: true
      },
      {
        text: {
          de: "Canal 06",
          fr: "Canal 06"
        },
        correct: false
      }
    ]
  },
  // Frage 33
  {
    question: {
      de: "Was ist ein „Digitaler Selektivruf“?",
      fr: "Qu'est-ce qu'un \"appel sélectif numérique” ?"
    },
    answers: [
      {
        text: {
          de: "Aussendung eines digitalen Anrufs auf Kanal 16",
          fr: "Transmission d'un appel numérique sur le canal 16"
        },
        correct: false
      },
      {
        text: {
          de: "Funkaussendung an eine ausgewählte Funkstelle",
          fr: "Transmission d’un appel à une station de navire choisie"
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr im GMDSS-System auf den dafür vorgesehenen Kanälen",
          fr: "Radiocommunications dans le système SMDSM sur les canaux prévus à cet eƯet"
        },
        correct: false
      },
      {
        text: {
          de: "Digitale Aussendung, die bei der gerufenen Funkstelle ein optisches und/oder akustisches Signal auslöst",
          fr: "Un signal numérique qui, lorsqu'il est transmis à la station d'accueil, génère un signal optique et/ou acoustique"
        },
        correct: true
      }
    ]
  },
  // Frage 34
  {
    question: {
      de: "Auf welchem UKW-Kanal erfolgt die Alarmierung mittels DSC?",
      fr: "Sur quel canal VHF l'alarme est émise par ASN ?"
    },
    answers: [
      {
        text: {
          de: "Canal/Kanal 70",
          fr: "Canal/Kanal 70"
        },
        correct: true
      },
      {
        text: {
          de: "Canal/Kanal 16",
          fr: "Canal/Kanal 16"
        },
        correct: false
      },
      {
        text: {
          de: "Canal/Kanal 06",
          fr: "Canal/Kanal 06"
        },
        correct: false
      },
      {
        text: {
          de: "Canal/Kanal 10",
          fr: "Canal/Kanal 10"
        },
        correct: false
      }
    ]
  },
  // Frage 35
  {
    question: {
      de: "Welcher Unterschied besteht in der Reichweite bei analoger (Sprechfunk) und bei digitaler Übertragung (DSC) im UKW-Seefunkbereich?",
      fr: "Quelle est la diƯérence de portée entre la transmission analogique (radiocommunication vocale) et la transmission numérique (ASN) dans le domaine des radiocommunications maritimes VHF ?"
    },
    answers: [
      {
        text: {
          de: "Bei digitaler Übertragung besteht kein Unterschied im Vergleich zur analogen Übertragung",
          fr: "Il n'y a aucune diƯérence entre la transmission numérique et la transmission analogique"
        },
        correct: false
      },
      {
        text: {
          de: "Bei digitaler Übertragung vierfache Reichweite im Vergleich zur analogen Übertragung",
          fr: "Une portée quatre fois supérieure avec la transmission numérique par rapport à la transmission analogique"
        },
        correct: false
      },
      {
        text: {
          de: "Bei digitaler Übertragung kürzere Reichweite im Vergleich zur analogen Übertragung",
          fr: "Portée plus courte avec la transmission numérique par rapport à la transmission analogique"
        },
        correct: false
      },
      {
        text: {
          de: "Bei digitaler Übertragung deutlich größere Reichweite im Vergleich zur analogen Übertragung",
          fr: "Avec la transmission numérique, la portée est nettement supérieure à celle de la transmission analogique"
        },
        correct: true
      }
    ]
  },
  // Frage 36
  {
    question: {
      de: "Wie lautet die Maritime Identification Digits (MID) für Luxemburg?",
      fr: "Quel est le chiƯre d'identiﬁcation maritime (MID) pour le Luxembourg ?"
    },
    answers: [
      {
        text: {
          de: "352",
          fr: "352"
        },
        correct: false
      },
      {
        text: {
          de: "523",
          fr: "523"
        },
        correct: false
      },
      {
        text: {
          de: "253",
          fr: "253"
        },
        correct: true
      },
      {
        text: {
          de: "353",
          fr: "353"
        },
        correct: false
      }
    ]
  },
  // Frage 37
  {
    question: {
      de: "Wie wird eine mit DSC-Einrichtungen ausgerüstete Seefunkstelle gekennzeichnet?",
      fr: "Comment est identiﬁée une station de radiocommunications maritime équipée d'un système ASN ?"
    },
    answers: [
      {
        text: {
          de: "Rufnummer des mobilen Seefunkdienstes (MMSI), Schiffsname",
          fr: "Numéro d'appel du service maritime mobile (MMSI), nom du navire"
        },
        correct: false
      },
      {
        text: {
          de: "Schiffsname, Heimathafen, Rufzeichen",
          fr: "Nom du navire, port d'attache, indicatif d'appel"
        },
        correct: false
      },
      {
        text: {
          de: "Registriernummer des Schiffszertifikates, Rufzeichen",
          fr: "Numéro d'enregistrement du certiﬁcat du navire, indicatif d'appel"
        },
        correct: false
      },
      {
        text: {
          de: "Schiffsname, Rufzeichen, Rufnummer des mobilen Seefunkdienstes (MMSI)",
          fr: "Nom du navire, indicatif d'appel, numéro d'appel du service maritime mobile (MMSI)"
        },
        correct: true
      }
    ]
  },
  // Frage 38
  {
    question: {
      de: "Der mit einem DSC-Gerät aufgenommene Notalarm wird…",
      fr: "L'alarme de détresse enregistrée avec un appareil ASN est..."
    },
    answers: [
      {
        text: {
          de: "automatisch gespeichert.",
          fr: "enregistrée automatiquement."
        },
        correct: true
      },
      {
        text: {
          de: "manuell gespeichert.",
          fr: "stockée manuellement."
        },
        correct: false
      },
      {
        text: {
          de: "gespeichert, wenn im Speicher noch genügend Platz ist.",
          fr: "Sauvegardée s'il y a encore assez d'espace dans la mémoire."
        },
        correct: false
      },
      {
        text: {
          de: "nicht gespeichert, sondern ausgedruckt.",
          fr: "Pas sauvegardée, mais imprimée."
        },
        correct: false
      }
    ]
  },
  // Frage 39
  {
    question: {
      de: "Was wird als „Maritime Mobile Service Identity (MMSI)“ bezeichnet?",
      fr: "Qu'appelle-t-on « Maritime Mobile Service Identity (MMSI) » ?"
    },
    answers: [
      {
        text: {
          de: "Maritimes Informationssystem",
          fr: "Système d'information maritime"
        },
        correct: false
      },
      {
        text: {
          de: "Rufnummer im Seefunkdienst",
          fr: "Numéro d’appel du service radio maritime"
        },
        correct: true
      },
      {
        text: {
          de: "Landeskennung einer Seefunkstelle (z.B. 21a)",
          fr: "Code pays d'une station radio maritime (par exemple 21a)"
        },
        correct: false
      },
      {
        text: {
          de: "Aussendung, die die Sicherheit der Schifffahrt betrifft",
          fr: "Transmission concernant la sécurité de la navigation"
        },
        correct: false
      }
    ]
  },
  // Frage 40
  {
    question: {
      de: "Welches Dokument enthält die eigene Seefunkstellen-Rufnummer (MMSI)?",
      fr: "Quel document contient le numéro propre à la station d’un navire (MMSI) ?"
    },
    answers: [
      {
        text: {
          de: "Zuteilungsurkunde",
          fr: "Licence de station de navire (LSN)"
        },
        correct: true
      },
      {
        text: {
          de: "Konformitätsbescheinigung der Geräte",
          fr: "Certiﬁcat de conformité des équipements"
        },
        correct: false
      },
      {
        text: {
          de: "Internationaler Bootsführerschein",
          fr: "Permis international de navigation"
        },
        correct: false
      },
      {
        text: {
          de: "Schiffsimmatrikulationszertifikat",
          fr: "Certiﬁcat d’immatriculation du bateau"
        },
        correct: false
      }
    ]
  },
  // Frage 41
  {
    question: {
      de: "Wie setzt sich die Seefunkstellen-Rufnummer (MMSI) zusammen?",
      fr: "Quelle est la composition du numéro de la station d’un navire (MMSI) ?"
    },
    answers: [
      {
        text: {
          de: "Drei Buchstaben und sechs Zahlen.",
          fr: "Trois lettres et six chiƯres."
        },
        correct: false
      },
      {
        text: {
          de: "Neun Zahlen, wobei die ersten drei Zahlen die Seefunkkennzahl (MID) des Landes enthalten.",
          fr: "Neuf chiƯres, dont les trois premiers contiennent le numéro d'identiﬁcation du pays (MID)."
        },
        correct: true
      },
      {
        text: {
          de: "Sieben Zahlen, wobei die ersten beiden Zahlen Nullen sein müssen.",
          fr: "Sept chiƯres, les deux premiers devant être des zéros."
        },
        correct: false
      },
      {
        text: {
          de: "Neun Zahlen, wobei die erste Zahl eine Null ist.",
          fr: "Neuf chiƯres, le premier étant un zéro."
        },
        correct: false
      }
    ]
  },
  // Frage 42
  {
    question: {
      de: "Woran ist die Nationalität der Seefunkstelle in der MMSI erkennbar?",
      fr: "Comment identiﬁe-t-on la nationalité de la station d’un navire dans l'identité MMSI ?"
    },
    answers: [
      {
        text: {
          de: "Seefunkkennzahl (MID)",
          fr: "Numéro d'identiﬁcation maritime (MID)"
        },
        correct: true
      },
      {
        text: {
          de: "Länderkennung, bestehend aus drei Buchstaben",
          fr: "Code pays, composé de trois lettres"
        },
        correct: false
      },
      {
        text: {
          de: "Letzte drei Zahlen der MMSI",
          fr: "Trois derniers chiƯres de l'identité MMSI"
        },
        correct: false
      },
      {
        text: {
          de: "Mittlere drei Zahlen der MMSI",
          fr: "Les trois chiƯres du milieu de l'identité MMSI"
        },
        correct: false
      }
    ]
  },
  // Frage 43
  {
    question: {
      de: "Wie setzt sich die Küstenfunkstellen-Rufnummer (MMSI) zusammen?",
      fr: "Quelle est la composition du numéro d'identiﬁcation d’une station côtière (MMSI) ?"
    },
    answers: [
      {
        text: {
          de: "Neun Zahlen, die ersten drei Zahlen enthalten die Seefunkkennzahl (MID)",
          fr: "Neuf chiƯres, les trois premiers chiƯres contiennent le numéro d'identiﬁcation maritime (MID)"
        },
        correct: false
      },
      {
        text: {
          de: "Geografischer Ortsname der Küstenfunkstelle, gefolgt von drei Zahlen, die die Seefunkkennzahl (MID) bilden",
          fr: "Nom géographique de la station côtière suivi de trois chiƯres qui forment le numéro d'identiﬁcation (MID)"
        },
        correct: false
      },
      {
        text: {
          de: "Internationale Telefon-Vorwahlnummer des Landes, in dem sich die Küstenfunkstelle befindet, gefolgt von fünf besonders festgelegten Zahlen",
          fr: "Indicatif téléphonique international du pays où se trouve la station côtière, suivi de cinq chiƯres spécialement désignés"
        },
        correct: false
      },
      {
        text: {
          de: "Neun Zahlen, die ersten beiden Zahlen Nullen, die nächsten drei Zahlen enthalten die Seefunkkennzahl des Landes (MID)",
          fr: "Neuf chiƯres, les deux premiers sont des zéros, les trois suivants contiennent le numéro d'identiﬁcation maritime du pays (MID)."
        },
        correct: true
      }
    ]
  },
  // Frage 44
  {
    question: {
      de: "Wie werden die internationalen Kanäle im UKW-Seefunkbereich bezeichnet?",
      fr: "Comment s'appellent les canaux internationaux dans la gamme maritime VHF ?"
    },
    answers: [
      {
        text: {
          de: "Canal/Kanal 1 à/bis 20 et/und 68 à/bis 88",
          fr: "Canal/Kanal 1 à/bis 20 et/und 68 à/bis 88"
        },
        correct: false
      },
      {
        text: {
          de: "Canal/Kanal 1 à/bis 28 et/und 60 à/bis 87",
          fr: "Canal/Kanal 1 à/bis 28 et/und 60 à/bis 87"
        },
        correct: false
      },
      {
        text: {
          de: "Canal/Kanal 1 à/bis 28 et/und 60 à/bis 88",
          fr: "Canal/Kanal 1 à/bis 28 et/und 60 à/bis 88"
        },
        correct: true
      },
      {
        text: {
          de: "Canal/Kanal 1 à/bis 28 et/und 68 à/bis 88",
          fr: "Canal/Kanal 1 à/bis 28 et/und 68 à/bis 88"
        },
        correct: false
      }
    ]
  },
  // Frage 45
  {
    question: {
      de: "Durch die Verbindung mit welchem Gerät ist gewährleistet, dass bei einem DSC-Notalarm die aktuelle Position automatisch mit ausgesendet wird?",
      fr: "Quel dispositif est connecté pour garantir que la position actuelle soit automatiquement transmise en cas d'alarme de détresse par ASN ?"
    },
    answers: [
      {
        text: {
          de: "NAVTEX-Empfänger",
          fr: "Récepteur NAVTEX"
        },
        correct: false
      },
      {
        text: {
          de: "Radargerät",
          fr: "Équipement radar"
        },
        correct: false
      },
      {
        text: {
          de: "GPS-Empfänger",
          fr: "Récepteur GPS"
        },
        correct: true
      },
      {
        text: {
          de: "UKW-Wachempfänger",
          fr: "Récepteur de veille VHF"
        },
        correct: false
      }
    ]
  },
  // Frage 46
  {
    question: {
      de: "Wie wird der Frequenzbereich von 30 bis 300 MHz bezeichnet?",
      fr: "Comment appelle-t-on la gamme de fréquences de 30 à 300 MHz ?"
    },
    answers: [
      {
        text: {
          de: "Langwelle (LW/LF)",
          fr: "Ondes longues/ondes kilométriques (LW/LF)"
        },
        correct: false
      },
      {
        text: {
          de: "Mittelwelle (MW/MF)",
          fr: "Ondes moyennes/ondes hectométriques (MW/MF)"
        },
        correct: false
      },
      {
        text: {
          de: "Kurzwelle (KW/HF)",
          fr: "Ondes courtes/ondes décamétriques (KW/HF)"
        },
        correct: false
      },
      {
        text: {
          de: "Ultrakurzwelle (UKW/VHF)",
          fr: "Ondes ultra-courtes/ondes métriques (VHF/VHF)"
        },
        correct: true
      }
    ]
  },
  // Frage 47
  {
    question: {
      de: "Welches Funkzeugnis muss der Führer eines Sportfahrzeugs, das mit einer UKW/DSC-Funkstelle ausgerüstet ist, mindestens besitzen, um am GMDSS teilnehmen zu dürfen?",
      fr: "Quel est le certiﬁcat d‘opérateur que le conducteur d'un bateau de plaisance équipé d'une station de navire VHF/ASN doit à minima posséder aﬁn qu’il puisse participer au système SMDSM ?"
    },
    answers: [
      {
        text: {
          de: "Allgemeines Sprechfunkzeugnis für den Seefunkdienst",
          fr: "Certiﬁcat de radiotéléphonie générale pour le service mobile maritime"
        },
        correct: false
      },
      {
        text: {
          de: "Short Range Certificate",
          fr: "Short Range Certiﬁcate"
        },
        correct: true
      },
      {
        text: {
          de: "UKW-Sprechfunkzeugnis für den Binnenschifffahrtsfunk",
          fr: "Certiﬁcat de radiotéléphonie VHF pour la navigation intérieure"
        },
        correct: false
      },
      {
        text: {
          de: "Allgemeines Betriebszeugnis für Funker (General Operator’s Certificate)",
          fr: "Certiﬁcat général d'opérateur"
        },
        correct: false
      }
    ]
  },
  // Frage 48
  {
    question: {
      de: "Wovon hängt die Reichweite einer UKW-Funkanlage hauptsächlich ab?",
      fr: "De quoi dépend principalement la portée d'un système radioélectrique VHF ?"
    },
    answers: [
      {
        text: {
          de: "Bordnetzspannung",
          fr: "Tension de la batterie du bateau"
        },
        correct: false
      },
      {
        text: {
          de: "Tageszeit",
          fr: "Heure de la journée"
        },
        correct: false
      },
      {
        text: {
          de: "Wetter",
          fr: "Météo"
        },
        correct: false
      },
      {
        text: {
          de: "Antennenhöhe",
          fr: "Hauteur de l'antenne"
        },
        correct: true
      }
    ]
  },
  // Frage 49
  {
    question: {
      de: "An welchem Funkdienst darf der Inhaber eines Beschränkt Gültigen Funkbetriebszeugnisses (SRC) teilnehmen?",
      fr: "À quel service de radiocommunications le titulaire d'un certiﬁcat SRC peut-il participer ?"
    },
    answers: [
      {
        text: {
          de: "Mobiler Seefunkdienst auf Ultrakurzwelle (UKW/VHF)",
          fr: "Service mobile de radiocommunications maritime sur ondes ultra-courtes (VHF/VHF)"
        },
        correct: true
      },
      {
        text: {
          de: "Mobiler Seefunkdienst auf Ultrakurzwelle (UKW/VHF) einschließlich Satellitenseefunkdienst",
          fr: "Service maritime mobile sur ondes ultracourtes (VHF/VHF), y compris le service mobile maritime par satellite"
        },
        correct: false
      },
      {
        text: {
          de: "Mobiler Seefunkdienst auf Kurzwelle (KW/HF) und Grenzwelle (GW/MF), außer Satellitenseefunkdienst",
          fr: "Service mobile maritime sur ondes courtes (HF/HW) et ondes limites (GW/MF), à l'exception du service mobile maritime par satellite"
        },
        correct: false
      },
      {
        text: {
          de: "Mobiler Seefunkdienst auf Ultrakurzwelle (UKW/VHF) einschließlich Grenzwelle/Kurzwelle",
          fr: "Service maritime mobile en ondes ultracourtes (VHF/VHF), y compris les ondes limites et les ondes courtes"
        },
        correct: false
      }
    ]
  },
  // Frage 50
  {
    question: {
      de: "Wie lautet das Dringlichkeitszeichen im Sprechfunk?",
      fr: "Quel est le signal d’urgence en radiotéléphonie ?"
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
          de: "SECURITY",
          fr: "SECURITY"
        },
        correct: false
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
          de: "URGENCY",
          fr: "URGENCY"
        },
        correct: false
      }
    ]
  },
  // Frage 51
  {
    question: {
      de: "Welche UKW-Kanäle sind international ausschließlich für den Funkverkehr zwischen Seefunkstellen vorgesehen?",
      fr: "Quels canaux VHF sont destinés au niveau international exclusivement pour des radiocommunications entre les stations des navires ?"
    },
    answers: [
      {
        text: {
          de: "Kanäle 15 und 17",
          fr: "Canaux 15 et 17"
        },
        correct: false
      },
      {
        text: {
          de: "Kanäle 16, 69, 70 und 82",
          fr: "Canaux 16, 69, 70 et 82"
        },
        correct: false
      },
      {
        text: {
          de: "Kanäle 16 und 18, alternativ 70",
          fr: "Canaux 16 et 18, alternativement 70"
        },
        correct: false
      },
      {
        text: {
          de: "Kanäle 08, 72 und 77",
          fr: "Canaux 08, 72 et 77"
        },
        correct: true
      }
    ]
  },
  // Frage 52
  {
    question: {
      de: "Welchen UKW-Kanal benutzen Sportfahrzeuge für ein Funkgespräch sozialer Art vorzugsweise in den meisten Hoheitsgewässern?",
      fr: "Quel canal VHF les bateaux de plaisance utilisent-ils de préférence pour communication sociale entre eux par radiocommunication dans la plupart des eaux territoriales ?"
    },
    answers: [
      {
        text: {
          de: "Canal 72",
          fr: "Canal 72"
        },
        correct: true
      },
      {
        text: {
          de: "Canal 70",
          fr: "Canal 70"
        },
        correct: false
      },
      {
        text: {
          de: "Canal 10",
          fr: "Canal 10"
        },
        correct: false
      },
      {
        text: {
          de: "Canal 06",
          fr: "Canal 06"
        },
        correct: false
      }
    ]
  },
  // Frage 53
  {
    question: {
      de: "Atmosphärische Störungen des Funkverkehrs sind …",
      fr: "Les interférences atmosphériques en relation avec les radiocommunications…"
    },
    answers: [
      {
        text: {
          de: "VHF im Seefunkverkehr im UKW-Bereich kein Problem",
          fr: "Ne posent pas de problème dans les radiocommunications de la gamme"
        },
        correct: true
      },
      {
        text: {
          de: "im Seefunkverkehr im UKW-Bereich ein großes Problem",
          fr: "Posent un gros problème dans les radiocommunications de la gamme VHF"
        },
        correct: false
      },
      {
        text: {
          de: "gleichzeitig im UKW-Bereich und beim NAVTEX-Empfang vorhanden",
          fr: "Sont simultanément présentes dans la gamme VHF et dans la réception NAVTEX"
        },
        correct: false
      },
      {
        text: {
          de: "im UKW-Bereich nur bei Verwendung von nicht vertikal angebrachten Antennen vorhanden",
          fr: "Sont uniquement présentes dans la gamme VHF en utilisant des antennes non montées verticalement"
        },
        correct: false
      }
    ]
  },
  // Frage 54
  {
    question: {
      de: "Wie sollen UKW-Antennen ausgerichtet werden?",
      fr: "Comment doivent-être montées les antennes VHF ?"
    },
    answers: [
      {
        text: {
          de: "Horizontal",
          fr: "Horizontalement"
        },
        correct: false
      },
      {
        text: {
          de: "Vertikal",
          fr: "Verticalement"
        },
        correct: true
      },
      {
        text: {
          de: "Radial",
          fr: "En radial"
        },
        correct: false
      },
      {
        text: {
          de: "Diagonal",
          fr: "En diagonale"
        },
        correct: false
      }
    ]
  },
  // Frage 55
  {
    question: {
      de: "Wodurch kann die Abstrahlung der Sendeenergie einer UKW-Anlage auf einem Schiff wesentlich beeinträchtigt werden?",
      fr: "Qu'est-ce qui peut réduire de manière signiﬁcative le rayonnement de l'énergie de transmission d'un système VHF sur un navire ?"
    },
    answers: [
      {
        text: {
          de: "Metallische Gegenstände in der Nähe der Antenne",
          fr: "Objets métalliques près de l'antenne"
        },
        correct: true
      },
      {
        text: {
          de: "Schräglage des Schiffs",
          fr: "Position inclinée du navire"
        },
        correct: false
      },
      {
        text: {
          de: "Metallische Gegenstände in der Nähe des Antennenkabels",
          fr: "Objets métalliques à proximité du câble d'antenne"
        },
        correct: false
      },
      {
        text: {
          de: "Wetter",
          fr: "Météo"
        },
        correct: false
      }
    ]
  },
  // Frage 56
  {
    question: {
      de: "Was hat keinen Einfluss auf die Reichweite eines UKW-Handsprechfunkgerätes?",
      fr: "Qu'est-ce qui n'aƯecte pas la portée d'un équipement VHF portatif ?"
    },
    answers: [
      {
        text: {
          de: "Niedrige Antennenhöhe",
          fr: "Faible hauteur d'antenne"
        },
        correct: false
      },
      {
        text: {
          de: "Geringer Ladezustand des Akkus",
          fr: "Faible charge de l’accumulateur"
        },
        correct: false
      },
      {
        text: {
          de: "Schlechtes Wetter",
          fr: "Mauvais temps"
        },
        correct: true
      },
      {
        text: {
          de: "Geringe Sendeleistung",
          fr: "Faible puissance d'émission"
        },
        correct: false
      }
    ]
  },
  // Frage 57
  {
    question: {
      de: "Wie ist die Rangfolge der Aussendungen im Seefunkdienst festgelegt?",
      fr: "Quel est l'ordre de priorité des transmissions dans le service de radiocommunications maritime ?"
    },
    answers: [
      {
        text: {
          de: "Not, Dringlichkeit, Sicherheit, Routine",
          fr: "Détresse, Urgence, Sécurité, Routine"
        },
        correct: true
      },
      {
        text: {
          de: "Not, Sicherheit, Dringlichkeit, Routine",
          fr: "Détresse, Sécurité, Urgence, Routine"
        },
        correct: false
      },
      {
        text: {
          de: "Routine, Sicherheit, Dringlichkeit, Not",
          fr: "Routine, Sécurité, Urgence, Détresse"
        },
        correct: false
      },
      {
        text: {
          de: "Routine, Dringlichkeit, Sicherheit, Not",
          fr: "Routine, Urgence, Sécurité, Détresse"
        },
        correct: false
      }
    ]
  },
  // Frage 58
  {
    question: {
      de: "Wer bestimmt bei einer Verbindung zwischen See- und Küstenfunkstelle den für die weitere Verkehrsabwicklung zu benutzenden Arbeitskanal?",
      fr: "Lors d'une connexion entre une station de navire et une station côtière, qui détermine le canal de travail à utiliser pour le traitement ultérieur du traﬁc ?"
    },
    answers: [
      {
        text: {
          de: "Seefunkstelle",
          fr: "Station de navire"
        },
        correct: false
      },
      {
        text: {
          de: "Küstenfunkstelle",
          fr: "Station côtière"
        },
        correct: true
      },
      {
        text: {
          de: "On-Scene Co-ordinator (OSC)",
          fr: "Coordinateur sur place (OSC)"
        },
        correct: false
      },
      {
        text: {
          de: "Rufende Funkstelle",
          fr: "Station appelante"
        },
        correct: false
      }
    ]
  },
  // Frage 59
  {
    question: {
      de: "Welche Vorkommnisse im Seefunkdienst sollen im Schiffstagebuch dokumentiert werden?",
      fr: "Quels incidents dans le service mobile maritime doivent être documentés dans le journal de bord du navire ?"
    },
    answers: [
      {
        text: {
          de: "Der Not-, Dringlichkeits- und Sicherheitsverkehr sowie der Routineverkehr zwischen Seefunkstellen und Küstenfunkstellen",
          fr: "Transmission de détresse, d'urgence et de sécurité ainsi que les transmissions de routine entre les stations mobiles maritimes et les stations côtières"
        },
        correct: false
      },
      {
        text: {
          de: "Der gesamte DSC-Verkehr sowie wichtige Vorkommnisse, die den Seefunkdienst betreffen",
          fr: "Toutes les transmissions ASN et les incidents importants aƯectant le service mobile maritime"
        },
        correct: false
      },
      {
        text: {
          de: "Der GMDSS-Verkehr zwischen Seefunkstellen sowie Fehlalarme und andere wichtige Vorkommnisse, die den Seefunkdienst betreffen",
          fr: "Les transmissions SMDSM entre les stations mobiles maritimes ainsi que les fausses alarmes et autres incidents importants aƯectant le service mobile maritime"
        },
        correct: false
      },
      {
        text: {
          de: "Der Not-, Dringlichkeits- und Sicherheitsverkehr sowie wichtige Vorkommnisse, die den Seefunkdienst betreffen",
          fr: "Transmissions de détresse, d‘urgence et de sécurité ainsi que les incidents importants concernant le service mobile maritime"
        },
        correct: true
      }
    ]
  },
  // Frage 60
  {
    question: {
      de: "Wie lautet das Sicherheitszeichen im Seefunkdienst?",
      fr: "Quel est le signal de sécurité dans le service de radiocommunications maritime ?"
    },
    answers: [
      {
        text: {
          de: "URGENCY",
          fr: "URGENCY"
        },
        correct: false
      },
      {
        text: {
          de: "SECURITE",
          fr: "SECURITE"
        },
        correct: true
      },
      {
        text: {
          de: "PAN PAN",
          fr: "PAN PAN"
        },
        correct: false
      },
      {
        text: {
          de: "MAYDAY",
          fr: "MAYDAY"
        },
        correct: false
      }
    ]
  },
  // Frage 61
  {
    question: {
      de: "Was zeigt das Dringlichkeitszeichen an?",
      fr: "Qu'indique le signal d’urgence ?"
    },
    answers: [
      {
        text: {
          de: "Die rufende Funkstelle hat eine Meldung auszusenden, dass ein Schiff von einer ernsten und unmittelbaren Gefahr bedroht ist und sofortige Hilfe benötigt.",
          fr: "La station radio appelante doit envoyer un message indiquant qu'un navire est en danger grave et immédiat et qu'il nécessite une assistance immédiate."
        },
        correct: false
      },
      {
        text: {
          de: "Die rufende Funkstelle hat eine eilige Meldung auszusenden, die eine nautische Warnnachricht zum Inhalt hat.",
          fr: "La station radio appelante doit envoyer un message urgent contenant un message d'alerte nautique."
        },
        correct: false
      },
      {
        text: {
          de: "Die rufende Funkstelle hat eine dringende Meldung auszusenden, welche das Schiff oder die Crew betrifft.",
          fr: "La station radio appelante doit transmettre un message urgent concernant le navire ou l’équipage."
        },
        correct: true
      },
      {
        text: {
          de: "Seenotfunkbake (EPIRB) bestätigt.",
          fr: "La station radio appelante doit transmettre un message important qui conﬁrme la réception d'une balise de détresse (EPIRB). Die rufende Funkstelle hat eine wichtige Meldung auszusenden, welche den Empfang einer"
        },
        correct: false
      }
    ]
  },
  // Frage 62
  {
    question: {
      de: "Was wird im Sprechfunk durch das Zeichen PAN PAN angekündigt?",
      fr: "Qu'est-ce qui est annoncé en radiotéléphonie par le signal PAN PAN ?"
    },
    answers: [
      {
        text: {
          de: "Notmeldung",
          fr: "Message de détresse"
        },
        correct: false
      },
      {
        text: {
          de: "Sicherheitsmeldung",
          fr: "Message de sécurité"
        },
        correct: false
      },
      {
        text: {
          de: "Routinemeldung",
          fr: "Message de routine"
        },
        correct: false
      },
      {
        text: {
          de: "Dringlichkeitsmeldung",
          fr: "Message d'urgence"
        },
        correct: true
      }
    ]
  },
  // Frage 63
  {
    question: {
      de: "Für welche Verkehrsabwicklungen werden UKW-Handsprechfunkgeräte vorzugsweise verwendet?",
      fr: "Pour établir quels types de traﬁc les radios portatives VHF sont-elles de préférence utilisées ?"
    },
    answers: [
      {
        text: {
          de: "SAR Funkverkehr Schiff–Schiff, Funkverkehr Schiff–SAR-Hubschrauber",
          fr: "Radiocommunication navire-navire, radiocommunication navire-hélicoptère"
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr an Bord, Funkverkehr Schiff–Hafen",
          fr: "Radiocommunication à bord, radiocommunication navire-port"
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr mit Küstenfunkstellen, Funkverkehr Schiff–Überlebensfahrzeug",
          fr: "Radiocommunication avec les stations côtières, radiocommunication navire- engin de survie"
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr an Bord, Funkverkehr Schiff–Überlebensfahrzeug",
          fr: "Radiocommunication à bord, radiocommunication navire-engin de sauvetage"
        },
        correct: true
      }
    ]
  },
  // Frage 64
  {
    question: {
      de: "Wie ist im GMDSS zu verfahren, wenn eine dringende Meldung im UKW-Bereich auszusenden ist, welche die Sicherheit einer Person betrifft?",
      fr: "Quelle est la procédure à suivre dans le SMDSM lorsqu'un message urgent concernant la sécurité d'une personne doit être transmis dans la gamme VHF ?"
    },
    answers: [
      {
        text: {
          de: "Ankündigung und Aussendung der Dringlichkeitsmeldung im Sprechfunk auf Kanal 16",
          fr: "Annonce et transmission du message d'urgence par radiotéléphonie sur le canal 16."
        },
        correct: false
      },
      {
        text: {
          de: "Ankündigung per Digitalen Selektivruf (DSC) auf Kanal 70 und Aussendung der Dringlichkeitsmeldung im Sprechfunk auf Kanal 16",
          fr: "Annonce par appel sélectif numérique (ASN) sur le canal 70 et transmission du message d'urgence par radiotéléphonie sur le canal 16."
        },
        correct: true
      },
      {
        text: {
          de: "Ankündigung im Sprechfunk auf Kanal 16 und Aussendung der Dringlichkeitsmeldung auf einem Schiff-Schiff-Kanal",
          fr: "Annonce par radiotéléphonie sur le canal 16 et transmission du message de détresse sur un canal navire-navire."
        },
        correct: false
      },
      {
        text: {
          de: "Ankündigung per Digitalem Selektivruf (DSC) auf Kanal 70 und Aussendung der Dringlichkeitsmeldung auf einem Schiff-Schiff-Kanal",
          fr: "Annonce par appel sélectif numérique (ASN) sur le canal 70 et transmission du message de détresse sur un canal navire à navire."
        },
        correct: false
      }
    ]
  },
  // Frage 65
  {
    question: {
      de: "Welche Meldung wird mit SECURITE eingeleitet?",
      fr: "Quel message est initié par SECURITE ?"
    },
    answers: [
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
          de: "Routinemeldung",
          fr: "Message de routine"
        },
        correct: false
      },
      {
        text: {
          de: "Sicherheitsmeldung",
          fr: "Message de sécurité"
        },
        correct: true
      }
    ]
  },
  // Frage 66
  {
    question: {
      de: "Was bedeutet im DSC-Controller die Anzeige „URGENCY“?",
      fr: "Que signiﬁe le message \"URGENCY\" qui s’aƯiche sur le contrôleur ASN ?"
    },
    answers: [
      {
        text: {
          de: "Die nachfolgende Meldung ist eine Notmeldung und die Seefunkstelle erbittet sofortige Hilfe",
          fr: "Le message suivant est un message de détresse et la station de navire demande une assistance immédiate."
        },
        correct: false
      },
      {
        text: {
          de: "Die nachfolgende Meldung ist dringend und die Seefunkstelle erbittet nautische Beratung",
          fr: "Le message suivant est un message d’urgence et la station de navire demande des conseils nautiques."
        },
        correct: false
      },
      {
        text: {
          de: "Die nachfolgende Meldung ist dringend und betrifft das Schiff oder die Crew.",
          fr: "Le message suivant est urgent et concerne le navire ou l’équipage."
        },
        correct: true
      },
      {
        text: {
          de: "Die nachfolgende Meldung ist eine Wetterwarnung und betrifft die Sicherheit der Schifffahrt",
          fr: "Le message suivant est une alerte météorologique et concerne la sécurité de la navigation."
        },
        correct: false
      }
    ]
  },
  // Frage 67
  {
    question: {
      de: "An wen dürfen Dringlichkeitsmeldungen im Seefunkdienst grundsätzlich gerichtet werden?",
      fr: "À qui les messages d'urgence du service de radiocommunications maritime doivent-ils généralement être adressés ?"
    },
    answers: [
      {
        text: {
          de: "An alle Funkstellen oder an eine bestimmte Funkstelle",
          fr: "À toutes les stations de radiocommunications ou à une station de radiocommunications spéciﬁque"
        },
        correct: true
      },
      {
        text: {
          de: "An alle Funkstellen im Seegebiet A1 oder an eine bestimmte Funkstelle im Seegebiet A1",
          fr: "À toutes les stations de radiocommunications de la zone maritime A1 ou à une station de radiocommunications spéciﬁque de la zone maritime A1"
        },
        correct: false
      },
      {
        text: {
          de: "An alle Küstenfunkstellen oder an alle Funkstellen im Seegebiet A1",
          fr: "À toutes les stations côtières ou à toutes les stations de radiocommunications de la zone maritime A1"
        },
        correct: false
      },
      {
        text: {
          de: "An alle Küstenfunkstellen oder die Seenotleitung (MRCC)",
          fr: "À toutes les stations côtières ou au Centre de coordination et de sauvetage (MRCC)"
        },
        correct: false
      }
    ]
  },
  // Frage 68
  {
    question: {
      de: "Der UKW-Kanal 70 dient ausschließlich dem Zweck der Aussendung…",
      fr: "Le canal VHF 70 sert exclusivemenent à la transmission…"
    },
    answers: [
      {
        text: {
          de: "des Digitalen Selektivrufs",
          fr: "De l'appel sélectif numérique"
        },
        correct: true
      },
      {
        text: {
          de: "Von Peilzeichen",
          fr: "De signaux de radiogoniométrie"
        },
        correct: false
      },
      {
        text: {
          de: "Von Positionsmeldungen",
          fr: "De rapports de position"
        },
        correct: false
      },
      {
        text: {
          de: "von Küstenfunkstellen",
          fr: "des stations côtières"
        },
        correct: false
      }
    ]
  },
  // Frage 69
  {
    question: {
      de: "Wie ist zu verfahren, wenn eine an alle Funkstellen ausgesendete Dringlichkeitsmeldung erledigt ist?",
      fr: "Comment faut-il procéder lorsqu’un message d'urgence envoyé à toutes les stations de navire est terminé ?"
    },
    answers: [
      {
        text: {
          de: "Dringlichkeitsmeldung muss bei dem Fall „Mann über Bord“ durch eine Meldung an alle Funkstellen aufgehoben werden",
          fr: "Le message d'urgence doit être annulé par un message à toutes les stations de navire en cas « d’homme à la mer »."
        },
        correct: false
      },
      {
        text: {
          de: "Dringlichkeitsmeldung muss durch eine Meldung an die nächste Küstenfunkstelle aufgehoben werden",
          fr: "Le message d'urgence doit être annulé par un message adressé à la station côtière la plus proche."
        },
        correct: false
      },
      {
        text: {
          de: "Dringlichkeitsmeldung muss durch eine Meldung an alle Funkstellen aufgehoben werden",
          fr: "Le message d'urgence doit être annulé par un message adressé à toutes les stations de navire."
        },
        correct: true
      },
      {
        text: {
          de: "Dringlichkeitsmeldung muss durch die Meldung SILENCE FINI aufgehoben werden",
          fr: "Le message d'urgence doit être annulé par le message SILENCE FINI."
        },
        correct: false
      }
    ]
  },
  // Frage 70
  {
    question: {
      de: "Welche Betriebsart wird für den Schiff-Schiff-Verkehr auf UKW im Sprechfunkverfahren verwendet?",
      fr: "Quel mode de fonctionnement est utilisé pour le traﬁc navire-navire sur VHF en radiotéléphonie ?"
    },
    answers: [
      {
        text: {
          de: "Gegensprechen auf einer Frequenz",
          fr: "Communication bi-directionnelle sur une seule fréquence"
        },
        correct: false
      },
      {
        text: {
          de: "Wechselsprechen auf einer Frequenz",
          fr: "Communication mono-directionnelle sur une seule fréquence"
        },
        correct: true
      },
      {
        text: {
          de: "Wechselsprechen auf zwei Frequenzen",
          fr: "Communication mono-directionnelle sur deux fréquences"
        },
        correct: false
      },
      {
        text: {
          de: "Gegensprechen auf zwei Frequenzen",
          fr: "Communication bi-directionnelle sur deux fréquences"
        },
        correct: false
      }
    ]
  },
  // Frage 71
  {
    question: {
      de: "Welchen Inhalt kann eine Sicherheitsmeldung haben?",
      fr: "Quel peut être le contenu d'un message de sécurité ?"
    },
    answers: [
      {
        text: {
          de: "Wichtige nautische Warnnachricht oder die Weiterleitung eines Notalarms",
          fr: "Message d'avertissement nautique important ou transmission d'une alerte de détresse"
        },
        correct: false
      },
      {
        text: {
          de: "Wichtige nautische Warnnachricht oder eine wichtige Wetterwarnung",
          fr: "Message d'avertissement nautique important ou avertissement météorologique important"
        },
        correct: true
      },
      {
        text: {
          de: "Aufhebung eines Fehlalarms oder eine wichtige Wetterwarnung",
          fr: "Annulation d'une fausse alerte ou d'une alerte météorologique importante"
        },
        correct: false
      },
      {
        text: {
          de: "Aufhebung einer Dringlichkeitsmeldung oder ein Medico-Gespräch",
          fr: "Annulation d'un message d'urgence ou d'un appel médical"
        },
        correct: false
      }
    ]
  },
  // Frage 72
  {
    question: {
      de: "Welchen Zweck dient der UKW-Kanal 16 (156,8 MHz) im Seefunkdienst?",
      fr: "À quoi sert le canal VHF 16 (156,8 MHz) dans le service mobile maritime ?"
    },
    answers: [
      {
        text: {
          de: "Notverkehr, Dringlichkeitsmeldung, Sicherheitsmeldung, Anrufkanal",
          fr: "Traﬁc de détresse, message d'urgence, message de sécurité, canal d'appel"
        },
        correct: true
      },
      {
        text: {
          de: "Notverkehr, Gespräch sozialer Art, Routineverkehr, Anrufkanal",
          fr: "Traﬁc de détresse, conversation sociale, traﬁc de routine, canal d'appel"
        },
        correct: false
      },
      {
        text: {
          de: "Aussendung des digitalen Selektivrufs",
          fr: "Transmission de l'appel sélectif numérique"
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr zwischen Fischereifahrzeugen",
          fr: "Radiocommunications entre navires de pêche"
        },
        correct: false
      }
    ]
  },
  // Frage 73
  {
    question: {
      de: "Was ist bei Testsendungen im Sprech-Seefunkdienst zu beachten?",
      fr: "Que faut-il respecter lorsque l’on effectue des transmissions de tests dans le service de radiotéléphonie maritime ?"
    },
    answers: [
      {
        text: {
          de: "Die Aussendungen dürfen 20 Sekunden nicht überschreiten und müssen mit einer Kennung des Schiffes ausgestrahlt werden",
          fr: "Les transmissions ne doivent pas dépasser 20 secondes et doivent être transmises avec une identiﬁcation du navire."
        },
        correct: false
      },
      {
        text: {
          de: "Die Aussendungen dürfen nur einmal nach Einbau des Gerätes ohne Antenne erfolgen und müssen mit dem Wort „Test“ gekennzeichnet werden",
          fr: "Les transmissions ne doivent être eƯectuées qu'une seule fois après installation de l'appareil sans antenne et doivent être signalées par le mot \"Test\"."
        },
        correct: false
      },
      {
        text: {
          de: "Die Aussendungen dürfen 10 Sekunden nicht überschreiten, müssen mit dem Wort „Test“ und mit einer Kennung des Schiffes ausgestrahlt werden",
          fr: "Les transmissions ne doivent pas dépasser 10 secondes et doivent être transmises avec le mot \"Test\" et avec une identiﬁcation du navire."
        },
        correct: true
      },
      {
        text: {
          de: "Die Aussendungen dürfen nur außerhalb der Hoheitsgewässer erfolgen",
          fr: "Les transmissions ne peuvent être eƯectuées qu'en dehors des eaux territoriales."
        },
        correct: false
      }
    ]
  },
  // Frage 74
  {
    question: {
      de: "Auf welchem UKW-Kanal ist ein Sportfahrzeug automatisch empfangsbereit, wenn es sich auf See befindet und mit einer GMDSS-Seefunkanlage ausgerüstet ist?",
      fr: "Sur quel canal VHF un bateau de plaisance est-il automatiquement prêt à recevoir des alertes lorsqu'il est en mer et qu’il est équipé d'un système de radiocommunications maritime SMDSM ?"
    },
    answers: [
      {
        text: {
          de: "Canal/Kanal 16",
          fr: "Canal/Kanal 16"
        },
        correct: false
      },
      {
        text: {
          de: "Canal/Kanal 69",
          fr: "Canal/Kanal 69"
        },
        correct: false
      },
      {
        text: {
          de: "Canal/Kanal 70",
          fr: "Canal/Kanal 70"
        },
        correct: true
      },
      {
        text: {
          de: "Canal/Kanal 72",
          fr: "Canal/Kanal 72"
        },
        correct: false
      }
    ]
  },
  // Frage 75
  {
    question: {
      de: "Auf welchem UKW-Kanal sollte ein Sportfahrzeug in der Regel empfangsbereit sein, wenn es sich auf See befindet und nur mit einer UKW-Sprechfunkanlage ausgerüstet ist?",
      fr: "Sur quel canal VHF un bateau de plaisance doit-il normalement pouvoir recevoir des messages lorsqu'il est en mer et qu’il est équipé uniquement d'un système radiotéléphonique VHF ?"
    },
    answers: [
      {
        text: {
          de: "Canal/Kanal 70",
          fr: "Canal/Kanal 70"
        },
        correct: false
      },
      {
        text: {
          de: "Canal/Kanal 69",
          fr: "Canal/Kanal 69"
        },
        correct: false
      },
      {
        text: {
          de: "Canal/Kanal 06",
          fr: "Canal/Kanal 06"
        },
        correct: false
      },
      {
        text: {
          de: "Canal/Kanal 16",
          fr: "Canal/Kanal 16"
        },
        correct: true
      }
    ]
  },
  // Frage 76
  {
    question: {
      de: "Welcher UKW-Kanal kann für koordinierte Such- und Rettungseinsätze (SAR) benutzt werden?",
      fr: "Quel canal VHF peut être utilisé pour les opérations coordonnées de recherche et de sauvetage (SAR) ?"
    },
    answers: [
      {
        text: {
          de: "Canal/Kanal 06",
          fr: "Canal/Kanal 06"
        },
        correct: true
      },
      {
        text: {
          de: "Canal/Kanal 10",
          fr: "Canal/Kanal 10"
        },
        correct: false
      },
      {
        text: {
          de: "Canal/Kanal 77",
          fr: "Canal/Kanal 77"
        },
        correct: false
      },
      {
        text: {
          de: "Canal/Kanal 72",
          fr: "Canal/Kanal 72"
        },
        correct: false
      }
    ]
  },
  // Frage 77
  {
    question: {
      de: "Welchen Zwecken dienen der Anrufkanal und ein Arbeitskanal?",
      fr: "À quoi servent le canal d'appel et le canal de travail ?"
    },
    answers: [
      {
        text: {
          de: "Anrufkanal zur Verbindungsaufnahme, Arbeitskanal nur zur Abwicklung von Notfällen",
          fr: "Canal d'appel pour établir une connexion, canal de travail uniquement pour gérer les urgences."
        },
        correct: false
      },
      {
        text: {
          de: "Anrufkanal zur Verbindungsaufnahme, Arbeitskanal zur Abwicklung des weiteren Funkverkehrs",
          fr: "Canal d'appel pour établir une connexion, canal de travail pour effctuer le reste des radiocommunications"
        },
        correct: true
      },
      {
        text: {
          de: "Anrufkanal zur Verbindungsaufnahme, Arbeitskanal zur Abwicklung von Reiseplanungen",
          fr: "Canal d'appel pour établir une connexion, canal de travail pour eƯectuer la planiﬁcation du voyage."
        },
        correct: false
      },
      {
        text: {
          de: "Anrufkanal zur Verbindungsaufnahme mit Teilnehmern an Land, Arbeitskanal zur Zuweisung des Schleusenranges",
          fr: "Canal d'appel pour établir une connexion avec des participants à terre, canal de travail pour attribuer le rang d'écluse."
        },
        correct: false
      }
    ]
  },
  // Frage 78
  {
    question: {
      de: "Auf welchem Kanal wird eine Küstenfunkstelle ohne DSC im Routineverkehr gerufen?",
      fr: "Sur quel canal une station côtière est appelée sans ASN dans le traﬁc de routine ?"
    },
    answers: [
      {
        text: {
          de: "Kanal 16",
          fr: "Canal 16"
        },
        correct: false
      },
      {
        text: {
          de: "Arbeitskanal",
          fr: "Canal de travail"
        },
        correct: true
      },
      {
        text: {
          de: "Ankündigung auf Kanal 16, dann Wechsel zum Arbeitskanal",
          fr: "Annonce sur le canal 16, puis passage au canal de travail"
        },
        correct: false
      },
      {
        text: {
          de: "Kanal 70",
          fr: "Canal 70"
        },
        correct: false
      }
    ]
  },
  // Frage 79
  {
    question: {
      de: "Auf welchem Kanal ist eine Küstenfunkstelle zu rufen, die sowohl auf dem Kanal 70 als auch auf Kanal 16 sowie auf einem veröffentlichten Arbeitskanal empfangsbereit ist?",
      fr: "Sur quel canal doit-on appeler une station côtière qui est prête à recevoir à la fois sur le canal 70 et le canal 16 ainsi que sur un canal de travail public ?"
    },
    answers: [
      {
        text: {
          de: "Kanal 70 oder Arbeitskanal",
          fr: "Canal 70 ou canal de travail"
        },
        correct: true
      },
      {
        text: {
          de: "Kanal 16 oder Kanal 70",
          fr: "Canal 16 ou canal 70"
        },
        correct: false
      },
      {
        text: {
          de: "Kanal 70 oder Kanal 72",
          fr: "Canal 70 ou canal 72"
        },
        correct: false
      },
      {
        text: {
          de: "Kanal 16 oder Arbeitskanal",
          fr: "Canal 16 ou canal de travail"
        },
        correct: false
      }
    ]
  },
  // Frage 80
  {
    question: {
      de: "Was ist vor dem Anruf auf einem Arbeitskanal zu beachten?",
      fr: "De quoi faut-il tenir compte avant de faire un appel à un canal de travail ?"
    },
    answers: [
      {
        text: {
          de: "Die geringste Sendeleistung muss eingestellt werden.",
          fr: "La puissance de transmission la plus faible doit être sélectionnée."
        },
        correct: false
      },
      {
        text: {
          de: "Die Küstenfunkstelle muss den Arbeitskanal freigeben.",
          fr: "La station côtière doit libérer le canal de travail."
        },
        correct: false
      },
      {
        text: {
          de: "activité. Der laufende Funkverkehr muss aufgefordert werden, den Funkverkehr zu beenden.",
          fr: "Il faut demander aux radiocommunications en cours de cesser leur"
        },
        correct: false
      },
      {
        text: {
          de: "Der laufende Funkverkehr darf nicht gestört werden.",
          fr: "Les radiocommunications en cours ne doivent pas être perturbées."
        },
        correct: true
      }
    ]
  },
  // Frage 81
  {
    question: {
      de: "Was bedeutet „NAVTEX“?",
      fr: "Que signiﬁe \"NAVTEX\" ?"
    },
    answers: [
      {
        text: {
          de: "Navigationssystem, das Vorgaben im Funktelexverfahren erhält",
          fr: "Système de navigation qui reçoit des instructions par radio télex"
        },
        correct: false
      },
      {
        text: {
          de: "MW-Empfänger an Bord eines Seeschiffes zur Aufzeichnung von Wetterberichten",
          fr: "Récepteur MW à bord d'un navire de mer pour l'enregistrement des bulletins météorologiques"
        },
        correct: false
      },
      {
        text: {
          de: "Nautische Warnnachrichten im Funktelexverfahren",
          fr: "Messages d'alerte nautiques en mode radiotélex"
        },
        correct: true
      },
      {
        text: {
          de: "Satellitengestütztes Navigationssystem für den Seenotfall",
          fr: "Système de navigation par satellite en cas de détresse en mer"
        },
        correct: false
      }
    ]
  },
  // Frage 82
  {
    question: {
      de: "Was bezeichnet „SAR“?",
      fr: "Que désigne le terme \"SAR\" ?"
    },
    answers: [
      {
        text: {
          de: "Suche und Rettung",
          fr: "Recherche et sauvetage"
        },
        correct: true
      },
      {
        text: {
          de: "Seenotfunkbake",
          fr: "Balise de détresse maritime"
        },
        correct: false
      },
      {
        text: {
          de: "Sanitätsdienst",
          fr: "Service médical"
        },
        correct: false
      },
      {
        text: {
          de: "Radartransponder",
          fr: "Transpondeur radar"
        },
        correct: false
      }
    ]
  },
  // Frage 83
  {
    question: {
      de: "Welche Aufgabe hat ein „RCC“ im Seenotfall?",
      fr: "Quelle est le rôle d'un \"RCC\" en cas de détresse en mer ?"
    },
    answers: [
      {
        text: {
          de: "Stationierung von Seenotrettungskreuzern rund um die Uhr",
          fr: "Stationnement de croiseurs de sauvetage 24 heures sur 24"
        },
        correct: false
      },
      {
        text: {
          de: "Koordinierung der im Seenotfall zur Verfügung stehenden Kräfte und Abwicklung des Notverkehrs",
          fr: "Coordination des forces disponibles en cas de détresse en mer et gestion du traﬁc de détresse"
        },
        correct: true
      },
      {
        text: {
          de: "Alarmierung von SAR-Fahrzeugen im Seenotfall über Satelliten",
          fr: "Alerte par satellite des navires SAR en cas détresse en mer"
        },
        correct: false
      },
      {
        text: {
          de: "Erteilung von Ratschlägen an den Havaristen",
          fr: "Conseils au navire avarié"
        },
        correct: false
      }
    ]
  },
  // Frage 84
  {
    question: {
      de: "Was ist „On-Scene Communication“?",
      fr: "Que signiﬁe „On-Scene-Communication“?"
    },
    answers: [
      {
        text: {
          de: "Funkverkehr in Reichweite einer Küstenfunkstelle für UKW",
          fr: "Radiocommunications à portée d'une station côtière pour VHF"
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr im Hafenfunk (Port Radio)",
          fr: "Radiocommunications dans le port (radio portuaire)"
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr vor Ort im Seenotfall",
          fr: "Radiocommunications sur place en cas de détresse en mer"
        },
        correct: true
      },
      {
        text: {
          de: "Funkverkehr von Behördenfahrzeugen",
          fr: "Radiocommunications pour les navires des autorités"
        },
        correct: false
      }
    ]
  },
  // Frage 85
  {
    question: {
      de: "Welche Aufgabe hat der „On-Scene Koordinator“ (OSC) im SAR-Fall?",
      fr: "Quel est le rôle du coordinateur sur place (CSP) en cas de SAR ?"
    },
    answers: [
      {
        text: {
          de: "Leitung der Such- und Rettungsmaßnahmen vor Ort",
          fr: "Pilotage des mesures de recherche et de sauvetage sur place"
        },
        correct: true
      },
      {
        text: {
          de: "Kooperation mit der nächstgelegenen Küstenfunkstelle des Revierfunkdienstes",
          fr: "Coopération avec la station côtière la plus proche du service de la zone impactée"
        },
        correct: false
      },
      {
        text: {
          de: "Festlegung der DSC-Kanäle zur Verständigung der SAR-Einheiten",
          fr: "Détermination des canaux ASN pour la communication des unités SAR"
        },
        correct: false
      },
      {
        text: {
          de: "Verbreitung wichtiger SAR-Meldungen rund um die Uhr",
          fr: "DiƯusion de messages SAR importants 24 heures sur 24"
        },
        correct: false
      }
    ]
  },
  // Frage 86
  {
    question: {
      de: "Was bedeutet „Funkverkehr vor Ort“?",
      fr: "Que signiﬁe \"communication radio sur place\" ?"
    },
    answers: [
      {
        text: {
          de: "Funkverkehr zwischen dem Fahrzeug, das die Suche und Rettung koordiniert, und der Küstenfunkstelle",
          fr: "Radiocommunications entre le navire qui coordonne la recherche et le sauvetage et la station côtière."
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr zwischen dem Schiff in Not und den Fahrzeugen, die Hilfe leisten sowie dem Schiff in Not und dem Fahrzeug, das die Suche und Rettung koordiniert",
          fr: "Radiocommunications entre le navire en détresse et les navires fournissant une assistance et entre le navire en détresse et le navire coordonnant la recherche et le sauvetage."
        },
        correct: true
      },
      {
        text: {
          de: "Funkverkehr zwischen der Küstenfunkstelle und dem On-Scene Co-ordinator",
          fr: "Radicommunications entre la station côtière et le coordinateur sur place."
        },
        correct: false
      },
      {
        text: {
          de: "Funkverkehr zwischen dem Schiff in Not und in der Nähe befindlichen Luftfunkstellen",
          fr: "Radiocommunications entre le navire en détresse et les stations aériennes proches."
        },
        correct: false
      }
    ]
  },
  // Frage 87
  {
    question: {
      de: "Wer darf das Aussenden einer Notmeldung im Seefunkdienst veranlassen?",
      fr: "Qui peut initier la transmission d'un message de détresse dans le service mobile maritime ?"
    },
    answers: [
      {
        text: {
          de: "Crewmitglied",
          fr: "Membre de l'équipage"
        },
        correct: false
      },
      {
        text: {
          de: "Rudergänger",
          fr: "Barreur"
        },
        correct: false
      },
      {
        text: {
          de: "Rettungsleitstelle",
          fr: "Centre de contrôle des opérations de sauvetage"
        },
        correct: false
      },
      {
        text: {
          de: "Fahrzeugführer",
          fr: "Commandant du navire"
        },
        correct: true
      }
    ]
  },
  // Frage 88
  {
    question: {
      de: "Wie lautet das Notzeichen im Sprechfunk?",
      fr: "Quel est le signal de détresse en radiotéléphonie ?"
    },
    answers: [
      {
        text: {
          de: "PAN PAN",
          fr: "PAN PAN"
        },
        correct: false
      },
      {
        text: {
          de: "DISTRESS",
          fr: "DISTRESS"
        },
        correct: false
      },
      {
        text: {
          de: "MAYDAY",
          fr: "MAYDAY"
        },
        correct: true
      },
      {
        text: {
          de: "SOS",
          fr: "SOS"
        },
        correct: false
      }
    ]
  },
  // Frage 89
  {
    question: {
      de: "Womit wird der Notverkehr im Sprechfunk eingeleitet?",
      fr: "Qu'est-ce qui est utilisé pour annoncer la détresse en radiotéléphonie ?"
    },
    answers: [
      {
        text: {
          de: "MAYDAY",
          fr: "MAYDAY"
        },
        correct: true
      },
      {
        text: {
          de: "Schiffsname",
          fr: "Nom du navire"
        },
        correct: false
      },
      {
        text: {
          de: "DISTRESS",
          fr: "DISTRESS"
        },
        correct: false
      },
      {
        text: {
          de: "PANPAN",
          fr: "PANPAN"
        },
        correct: false
      }
    ]
  },
  // Frage 90
  {
    question: {
      de: "Wann liegt ein Seenotfall vor, der das Aussenden des Notzeichens im Sprechfunk rechtfertigt?",
      fr: "Quand y a-t-il une détresse en mer qui justiﬁe la transmission du signal de détresse par radiotéléphonie ?"
    },
    answers: [
      {
        text: {
          de: "Wenn ein Schiff manövrierbehindert ist und Hilfe benötigt",
          fr: "Lorsqu'un navire est entravé dans ses manœuvres et a besoin d'aide."
        },
        correct: false
      },
      {
        text: {
          de: "Wenn eine nautische Warnnachricht vorliegt, die unbedingt beachtet werden muss",
          fr: "Quand il y a un message d'alerte nautique à respecter impérativement."
        },
        correct: false
      },
      {
        text: {
          de: "Wenn ein Schiff oder eine Person in einer lebensbedrohlichen Gefahr ist und sofortige Hilfe benötigt.",
          fr: "Lorsqu'un navire ou une personne est menacé par un péril mortel et a besoin d'une assistance immédiate."
        },
        correct: true
      },
      {
        text: {
          de: "Wenn ein medizinischer Notfall vorliegt, der unmittelbare funkärztliche Beratung erfordert",
          fr: "En cas d'urgence médicale nécessitant un avis médical immédiat par radiocommunications."
        },
        correct: false
      }
    ]
  },
  // Frage 91
  {
    question: {
      de: "Welche Priorität der Alarmierung ist zu wählen, wenn sich eine Person in Lebensgefahr befindet und Hilfe benötigt?",
      fr: "Quelle priorité d'alerte doit être choisie si une personne est en danger de mort et a besoin d’aide ?"
    },
    answers: [
      {
        text: {
          de: "Dringlichkeit",
          fr: "Urgence"
        },
        correct: false
      },
      {
        text: {
          de: "Sicherheit",
          fr: "Sécurité"
        },
        correct: false
      },
      {
        text: {
          de: "Routine",
          fr: "Routine"
        },
        correct: false
      },
      {
        text: {
          de: "Notfall",
          fr: "Détresse"
        },
        correct: true
      }
    ]
  },
  // Frage 92
  {
    question: {
      de: "Welche Frequenzen dürfen neben den Notfrequenzen für die Aussendung einer Notmeldung im Seefunkdienst benutzt werden?",
      fr: "En plus des fréquences de détresse, quelles fréquences peuvent être utilisées pour la transmission d'un message de détresse dans le service mobile maritime ?"
    },
    answers: [
      {
        text: {
          de: "Jede andere verfügbare und geeignete Frequenz",
          fr: "Toute autre fréquence disponible et appropriée"
        },
        correct: true
      },
      {
        text: {
          de: "UKW-Kanal 06 (internationaler Verkehr)",
          fr: "Canal VHF 06 (traﬁc international)"
        },
        correct: false
      },
      {
        text: {
          de: "Keine andere Frequenz",
          fr: "Aucune autre fréquence"
        },
        correct: false
      },
      {
        text: {
          de: "Nur Schiff-Schiff-Frequenzen",
          fr: "Fréquences navire-navire uniquement"
        },
        correct: false
      }
    ]
  },
  // Frage 93
  {
    question: {
      de: "Auf welchem UKW-Kanal findet der Notverkehr vorzugsweise statt?",
      fr: "Sur quel canal VHF s'eƯectue de préférence le traﬁc de détresse ?"
    },
    answers: [
      {
        text: {
          de: "Kanal 70",
          fr: "Canal 70"
        },
        correct: false
      },
      {
        text: {
          de: "Kanal 16",
          fr: "Canal 16"
        },
        correct: true
      },
      {
        text: {
          de: "Kanal 69",
          fr: "Canal 69"
        },
        correct: false
      },
      {
        text: {
          de: "Kanal 06",
          fr: "Canal 06"
        },
        correct: false
      }
    ]
  },
  // Frage 94
  {
    question: {
      de: "Welche Meldungen dürfen im Weltweiten Seenot- und Sicherheitsfunksystem (GMDSS) auf UKW-Kanal 16 (156,8 MHz) übermittelt werden?",
      fr: "Quels messages peuvent être transmis dans le cadre du système mondial de détresse et de sécurité en mer (SMDSM) sur le canal VHF 16 (156,8 MHz) ?"
    },
    answers: [
      {
        text: {
          de: "Notmeldungen, Dringlichkeitsmeldungen und Sicherheitsmeldungen",
          fr: "Les messages de détresse, les messages d‘urgence et de sécurité."
        },
        correct: true
      },
      {
        text: {
          de: "Dringlichkeitsmeldungen und Meldungen im öffentlichen Funkverkehr",
          fr: "Messages d'urgence et messages dans le traﬁc de correspondance publique"
        },
        correct: false
      },
      {
        text: {
          de: "Sicherheits-, Dringlichkeitsmeldungen und Nichtöffentlicher Funkverkehr",
          fr: "Messages de sécurité, d'urgence et radiocommunications non publiques"
        },
        correct: false
      },
      {
        text: {
          de: "Notmeldungen und Routinemeldungen",
          fr: "Messages de détresse et messages de routine"
        },
        correct: false
      }
    ]
  },
  // Frage 95
  {
    question: {
      de: "Welche Veröffentlichung enthält die international entwickelten Redewendungen für Notfälle?",
      fr: "Quelle publication contient les phrases développées au niveau international pour les situations de détresse ?"
    },
    answers: [
      {
        text: {
          de: "Handbuch Yachtfunkdienst",
          fr: "Le manuel de service pour des bateaux de plaisance"
        },
        correct: false
      },
      {
        text: {
          de: "Handbuch der maritimen Redewendungen der IMO",
          fr: "Le manuel des phrases maritimes de l’OMI"
        },
        correct: true
      },
      {
        text: {
          de: "Nachrichten für Seefahrer",
          fr: "Nouvelles pour les marins"
        },
        correct: false
      },
      {
        text: {
          de: "Mitteilungen für Seefunkstellen und Schiffsfunkstellen",
          fr: "Communications pour les stations de navires et les stations de bateau"
        },
        correct: false
      }
    ]
  },
  // Frage 96
  {
    question: {
      de: "Wann und warum wird die Einleitung eines Notverkehrs wiederholt?",
      fr: "Quand et pourquoi le déclenchement d’une radiocommunication de détresse est-il répété ?"
    },
    answers: [
      {
        text: {
          de: "Wenn der DSC-Not Alarm nur von einer Küstenfunkstelle bestätigt worden ist.",
          fr: "Lorsque l'alerte de détresse ASN n‘a été reconnue que par une seule station côtière."
        },
        correct: false
      },
      {
        text: {
          de: "Die Einleitung des Notverkehrs darf nicht wiederholt werden, um Fehlalarme zu vermeiden.",
          fr: "Le déclenchement d’une radiocommunication de détresse ne doit pas être répété aﬁn d'éviter les fausses alertes. "
        },
        correct: false
      },
      {
        text: {
          de: "Einleitung des Notverkehrs wird nach 6 Minuten wiederholt, wenn keine Bestätigung erfolgt ist.",
          fr: "Le déclenchement du traﬁc de détresse doit être répété après 6 minutes si aucune conﬁrmation n'a été reçue."
        },
        correct: false
      },
      {
        text: {
          de: "Wenn die aussendende Seefunkstelle keine Antwort auf ihren DSC-Alarm oder ihre Notmeldung erhalten hat oder wenn sie es aus anderen Gründen für notwendig hält.",
          fr: "Lorsque la station maritime émettrice n'a pas reçu de réponse à son alerte ASN ou à son message de détresse, ou lorsqu'elle le juge nécessaire pour d'autres raisons."
        },
        correct: true
      }
    ]
  },
  // Frage 97
  {
    question: {
      de: "Auf welchen UKW-Kanälen dürfen zu Sicherheitszwecken Seefunkstellen mit SAR-Hubschraubern Funkverkehr abwickeln?",
      fr: "Sur quels canaux VHF les stations de navires peuvent-elles communiquer avec des hélicoptères de recherche et de sauvetage à des ﬁns de sécurité ?"
    },
    answers: [
      {
        text: {
          de: "Canal/Kanal 16",
          fr: "Canal/Kanal 16"
        },
        correct: false
      },
      {
        text: {
          de: "Canal/Kanal 06",
          fr: "Canal/Kanal 06"
        },
        correct: true
      },
      {
        text: {
          de: "Canal/Kanal 10",
          fr: "Canal/Kanal 10"
        },
        correct: false
      },
      {
        text: {
          de: "Canal/Kanal 70",
          fr: "Canal/Kanal 70"
        },
        correct: false
      }
    ]
  },
  // Frage 98
  {
    question: {
      de: "Auf welchem UKW-Kanal und in welchem Verfahren bestätigt eine Seefunkstelle den auf Kanal 70 empfangenen Notalarm?",
      fr: "Sur quel canal VHF et selon quelle procédure une station de navire conﬁrme-t- elle la réception de l'alerte de détresse reçue sur le canal 70 ?"
    },
    answers: [
      {
        text: {
          de: "Kanal 70, DSC",
          fr: "Canal 70, ASN"
        },
        correct: false
      },
      {
        text: {
          de: "Arbeitskanal, Sprechfunkverfahren",
          fr: "Canal de travail, procédure de radiotéléphonie"
        },
        correct: false
      },
      {
        text: {
          de: "Kanal 16, Sprechfunkverfahren",
          fr: "Canal 16, procédure vocale de radiotéléphonie"
        },
        correct: true
      },
      {
        text: {
          de: "Kanal 16, DSC",
          fr: "Canal 16, ASN"
        },
        correct: false
      }
    ]
  },
  // Frage 99
  {
    question: {
      de: "An wen soll eine Seefunkstelle den Notalarm für ein anderes in Not befindliches Schiff richten?",
      fr: "À qui une station de navire doit-elle envoyer l'alerte de détresse pour un autre navire en détresse ?"
    },
    answers: [
      {
        text: {
          de: "Grundsätzlich an alle Seefunkstellen in der Nähe",
          fr: "En principe à toutes les stations de navire à proximité"
        },
        correct: false
      },
      {
        text: {
          de: "Grundsätzlich an das Maritime Lagezentrum beim Havariekommando",
          fr: "En principe au centre de gestion maritime pour le pilotage en cas d‘avarie"
        },
        correct: false
      },
      {
        text: {
          de: "Grundsätzlich an die nächstgelegene Küstenfunkstelle oder sonst an alle Funkstellen",
          fr: "En principe à la station côtière la plus proche ou sinon à toutes les stations radioélectriques"
        },
        correct: true
      },
      {
        text: {
          de: "Grundsätzlich an ein Local User Terminal oder sonst an alle Seefunkstellen",
          fr: "En principe à un terminal d'utilisateur local ou sinon à toutes les stations de navire"
        },
        correct: false
      }
    ]
  },
  // Frage 100
  {
    question: {
      de: "Welche Voraussetzung muss eine Seefunkstelle erfüllen, die den Empfang eines DSC-Notalarms auf UKW im Sprechfunkverfahren bestätigt?",
      fr: "Quelle condition doit remplir une station de navire qui conﬁrme la réception d'une alarme de détresse ASN sur VHF selon la procédure de radiotéléphonie ?"
    },
    answers: [
      {
        text: {
          de: "Sie muss Hilfe leisten können.",
          fr: "Elle doit pouvoir porter assistance."
        },
        correct: true
      },
      {
        text: {
          de: "Eine sichere Funkverbindung muss möglich sein.",
          fr: "Il doit être possible d'établir une liaison radioélectrique sécurisée."
        },
        correct: false
      },
      {
        text: {
          de: "Sie muss die Seefunkstelle in Not spätestens nach einer Stunde erreichen können.",
          fr: "Elle doit pouvoir atteindre la station de navire en détresse dans un délai d'une heure au plus tard."
        },
        correct: false
      },
      {
        text: {
          de: "Notalarme sind in jedem Fall zu bestätigen.",
          fr: "Dans tous les cas les alarmes de détresses sont à conﬁrmer."
        },
        correct: false
      }
    ]
  },
  // Frage 101
  {
    question: {
      de: "Welchen UKW-Kanal soll ein Schiff in Not bis zur Ankunft eines SAR-Hubschraubers abhören?",
      fr: "Quel canal VHF un navire en détresse doit-il écouter jusqu'à l'arrivée d'un hélicoptère SAR?"
    },
    answers: [
      {
        text: {
          de: "Canal/Kanal 06",
          fr: "Canal/Kanal 06"
        },
        correct: false
      },
      {
        text: {
          de: "Canal/Kanal 10",
          fr: "Canal/Kanal 10"
        },
        correct: false
      },
      {
        text: {
          de: "Canal/Kanal 16",
          fr: "Canal/Kanal 16"
        },
        correct: true
      },
      {
        text: {
          de: "Canal/Kanal 70",
          fr: "Canal/Kanal 70"
        },
        correct: false
      }
    ]
  },
  // Frage 102
  {
    question: {
      de: "Wann wird im Seefunkdienst die Aufforderung SILENCE MAYDAY ausgesendet?",
      fr: "Quand l'appel SILENCE MAYDAY est-il envoyé dans le service mobile maritime ?"
    },
    answers: [
      {
        text: {
          de: "Wenn die Situation des Schiffes in Not besonders kritisch ist.",
          fr: "Lorsque la situation du navire en détresse est particulièrement critique."
        },
        correct: false
      },
      {
        text: {
          de: "Wenn die Funkstelle in Not oder die Funkstelle, die den Notverkehr leitet, störende Funkstellen zur Einhaltung der Funkstille auffordert.",
          fr: "Lorsque la station en détresse ou la station qui dirige le traﬁc de détresse demande aux stations qui interfèrent d'observer le silence radio."
        },
        correct: true
      },
      {
        text: {
          de: "Wenn die Funkstelle in Not oder die Funkstelle, die den Notverkehr leitet, die Beendigung des Notverkehrs ankündigen will.",
          fr: "Lorsque la station en détresse ou la station qui dirige le traﬁc de détresse veut signaler la ﬁn du traﬁc de détresse."
        },
        correct: false
      },
      {
        text: {
          de: "Wenn eine Funkstelle sich besondere Aufmerksamkeit für die Verbreitung einer Dringlichkeits- oder Sicherheitsmeldung erbittet.",
          fr: "Lorsqu’une station en détresse souhaite bénéﬁcier d’une attention particulière aﬁn d’émettre un message d’urgence ou de sécurité."
        },
        correct: false
      }
    ]
  },
  // Frage 103
  {
    question: {
      de: "Wodurch wird eine Satelliten-Seenotfunkbake (EPIRB) im Seenotfall automatisch aktiviert?",
      fr: "Qu'est-ce qui active automatiquement une balise de détresse maritime par satellite (RLS) en cas de détresse en mer ?"
    },
    answers: [
      {
        text: {
          de: "Rüttelkontakt",
          fr: "Contact par vibration"
        },
        correct: false
      },
      {
        text: {
          de: "GPS-Signale",
          fr: "Signaux GPS"
        },
        correct: false
      },
      {
        text: {
          de: "Salzwasserkontakt",
          fr: "Contact par l’eau salée"
        },
        correct: true
      },
      {
        text: {
          de: "Radar-Signale",
          fr: "Signaux radar"
        },
        correct: false
      }
    ]
  },
  // Frage 104
  {
    question: {
      de: "Wer fordert in einem Seenotfall eine störende Funkstelle mit den Wörtern SILENCE MAYDAY zur Einhaltung der Funkstille auf?",
      fr: "Dans un cas de détresse maritime, qui demande à une station de navire parasite avec les mots SILENCE MAYDAY d'observer le silence radio ?"
    },
    answers: [
      {
        text: {
          de: "Die Funkstelle in Not oder die Funkstelle, die den Notverkehr leitet",
          fr: "La station en détresse ou la station dirigeant le traﬁc de détresse"
        },
        correct: true
      },
      {
        text: {
          de: "Die Funkstelle in Not oder eine Hilfe leistende Luftfunkstelle",
          fr: "La station en détresse ou la station d’aéronef portant assistance"
        },
        correct: false
      },
      {
        text: {
          de: "Die Funkstelle, die die störende Funkstelle als erste empfangen hat",
          fr: "La station qui a reçu en premier la station qui a causé l'interférence"
        },
        correct: false
      },
      {
        text: {
          de: "Die Funkstelle, die der störenden Funkstelle am nächsten gelegen ist",
          fr: "La station la plus proche de la station qui interfère"
        },
        correct: false
      }
    ]
  },
  // Frage 105
  {
    question: {
      de: "Welche Aufgaben übernimmt die Seenotleitung (Maritime Rescue Co-ordination Centre [MRCC]) nach Eingang eines Notalarms?",
      fr: "Quelles sont les fonctions du Centre de coordination des sauvetages maritimes (MRCC) après réception d'une alarme de détresse?"
    },
    answers: [
      {
        text: {
          de: "Leitung des Notverkehrs auf Kanal 70",
          fr: "Gestion du traﬁc de détresse sur le canal 70"
        },
        correct: false
      },
      {
        text: {
          de: "Bestimmung des On-Scene Co-ordinators (OSC)",
          fr: "Détermination des coordinateurs sur place (CSP)"
        },
        correct: false
      },
      {
        text: {
          de: "Koordinierung und Information über die SAR-Maßnahmen",
          fr: "Coordination et information sur les mesures de recherche et de sauvetage"
        },
        correct: true
      },
      {
        text: {
          de: "Überwachung der Kanäle 16 und 70 sowie Dokumentation der SAR-Maßnahmen",
          fr: "Surveillance des canaux 16 et 70 et documentation des mesures de recherche et de sauvetage"
        },
        correct: false
      }
    ]
  },
  // Frage 106
  {
    question: {
      de: "Nach welchem Betriebsverfahren wird der Funkverkehr in Notfällen zwischen Seefunkstellen und SAR- Hubschraubern abgewickelt?",
      fr: "Quelle est la procédure opérationnelle pour traiter les communications en cas de détresse entre les stations de navire et les hélicoptères de recherche et de sauvetage ?"
    },
    answers: [
      {
        text: {
          de: "Betriebsverfahren des mobilen Flugfunkdienstes",
          fr: "Procédures d'exploitation des services mobiles aéronautiques"
        },
        correct: false
      },
      {
        text: {
          de: "Betriebsverfahren des Navigationsfunkdienstes",
          fr: "Procédures d'exploitation du service de radionavigation"
        },
        correct: false
      },
      {
        text: {
          de: "Betriebsverfahren des Küstenfunkdienstes",
          fr: "Procédures d'exploitation du service des stations côtières"
        },
        correct: false
      },
      {
        text: {
          de: "Betriebsverfahren des mobilen Seefunkdienstes",
          fr: "Procédures d'exploitation du service mobile maritime"
        },
        correct: true
      }
    ]
  },
  // Frage 107
  {
    question: {
      de: "Im Funkverkehr zwischen Seefunkstellen und SAR-Hubschraubern gilt das Betriebsverfahren…",
      fr: "Dans les radiocommunications entre les stations de navires et les hélicoptères de recherche et de sauvetage, les procédures d'exploitation sont celles ..."
    },
    answers: [
      {
        text: {
          de: "des Flugfunkdienstes",
          fr: "du service aéronautique"
        },
        correct: false
      },
      {
        text: {
          de: "der Rettungsdienste",
          fr: "des services de sauvetage"
        },
        correct: false
      },
      {
        text: {
          de: "des Seefunkdienstes",
          fr: "du service mobile maritime"
        },
        correct: true
      },
      {
        text: {
          de: "des Binnenschifffahrtsfunks",
          fr: "du service radiotéléphonique sur les voies de la navigation intérieure"
        },
        correct: false
      }
    ]
  },
  // Frage 108
  {
    question: {
      de: "Wodurch werden in der Regel bei einer Rettungsaktion mit SAR-Hubschraubern die Kanäle 16 und 06 auf einem Sportboot überwacht?",
      fr: "Quels sont les moyens les plus courants pour surveiller les canaux 16 et 06 sur un bateau de plaisance lors d'une opération de sauvetage avec des hélicoptères de recherche et de sauvetage ?"
    },
    answers: [
      {
        text: {
          de: "Zweikanal-Überwachung (Dual Watch)",
          fr: "Double veille"
        },
        correct: true
      },
      {
        text: {
          de: "Zwei unabhängige Seefunkgeräte",
          fr: "Deux radios maritimes indépendantes"
        },
        correct: false
      },
      {
        text: {
          de: "Regelmäßiges manuelles Umschalten",
          fr: "Commutation manuelle régulière"
        },
        correct: false
      },
      {
        text: {
          de: "Bedarfsweises manuelles Umschalten",
          fr: "Commutation manuelle selon les besoins"
        },
        correct: false
      }
    ]
  },
  // Frage 109
  {
    question: {
      de: "Was ist zu tun, wenn irrtümlich von einer Seefunkstelle ein Notalarm auf Kanal 70 ausgelöst wurde?",
      fr: "Que faire si une alarme de détresse sur le canal 70 a été déclenchée par erreur par une station de navire ?"
    },
    answers: [
      {
        text: {
          de: "Erstens, Gerät umgehend zurücksetzen, 2. Wenn möglich, den Fehlalarm per DSC zurücknehmen, 3. Mit Meldung auf Kanal 16 „An alle Funkstellen“ den Fehlalarm zurücknehmen",
          fr: "Premièrement réinitialiser l'appareil immédiatement, 2. si possible, annuler la fausse alarme par ASN, 3. annuler la fausse alarme avec un message sur le canal 16 « A toutes les stations »"
        },
        correct: true
      },
      {
        text: {
          de: "Erstens, Gerät ausschalten, um weitere Sendungen zu verhindern, 2. Eintragung der irrtümlichen Aussendung im Logbuch, 3. Zuständiges MRCC telefonisch informieren",
          fr: "Premièrement éteindre l'appareil pour empêcher d'autres transmissions, 2. inscrire la transmission erronée dans le journal de bord du navire, 3. informer le MRCC responsable par téléphone"
        },
        correct: false
      },
      {
        text: {
          de: "Erstens, Ankündigung der Rücknahme des Notalarms mit DSC, 2. Mit Meldung auf Kanal 16 „An alle Funkstellen“ den Fehlalarm zurücknehmen, 3. Schiffsführer informieren",
          fr: "Premièrement annoncer l'annulation de l'alarme de détresse par ASN, 2. annuler la fausse alarme par un message sur le canal 16 \"A toutes les stations\", 3. informer le capitain"
        },
        correct: false
      },
      {
        text: {
          de: "Erstens, Gerät umgehend zurücksetzen, 2. Ankündigung der Rücknahme des Notalarms mit DSC, 3. Mit Meldung auf Kanal 13 „An alle Funkstellen“ den Fehlalarm zurücknehmen",
          fr: "Premièrement réinitialiser le dispositif immédiatement, 2. annoncer l'annulation de l'alarme de détresse par ASN, 3. annuler la fausse alarme avec le message sur le canal 13 « A toutes les stations »"
        },
        correct: false
      }
    ]
  },
  // Frage 110
  {
    question: {
      de: "Welche Komponenten des weltweiten Seenot- und Sicherheitsfunksystems (GMDSS) werden für die Aussendung von Signalen zur Ortsbestimmung eingesetzt?",
      fr: "Quels sont les éléments du système mondial de détresse et de sécurité en mer (SMDSM) utilisés pour la transmission de signaux de radiolocalisation ?"
    },
    answers: [
      {
        text: {
          de: "NAVTEX, EGC",
          fr: "NAVTEX, EGC"
        },
        correct: false
      },
      {
        text: {
          de: "ASN, EPIRB",
          fr: "ASN, EPIRB"
        },
        correct: false
      },
      {
        text: {
          de: "NAVTEX, SART",
          fr: "NAVTEX, SART"
        },
        correct: false
      },
      {
        text: {
          de: "SART, EPIRB",
          fr: "SART, EPIRB"
        },
        correct: true
      }
    ]
  },
  // Frage 111
  {
    question: {
      de: "Wo soll eine Satelliten-Seenotfunkbake (EPIRB) an Bord eines Sportbootes installiert werden?",
      fr: "Où une balise de détresse maritime par satellite (RLS) doit-elle être installée à bord d'un bateau de plaisance ?"
    },
    answers: [
      {
        text: {
          de: "In der Backskiste",
          fr: "Dans le coƯre de rangement du cockpit"
        },
        correct: false
      },
      {
        text: {
          de: "Im Transportkoffer",
          fr: "Dans la valise de transport"
        },
        correct: false
      },
      {
        text: {
          de: "Im äußeren Decksbereich",
          fr: "Dans la zone du pont extérieur"
        },
        correct: true
      },
      {
        text: {
          de: "Geschützt unter Deck",
          fr: "Protégée sous le pont"
        },
        correct: false
      }
    ]
  },
  // Frage 112
  {
    question: {
      de: "Wann darf eine Satelliten-Seenotfunkbake (EPIRB) für eine Aussendung aktiviert werden?",
      fr: "Quand une balise de détresse maritime par satellite (RLS) peut-elle être activée pour la transmission ?"
    },
    answers: [
      {
        text: {
          de: "Zu Testzwecken",
          fr: "A des ﬁns d'essai"
        },
        correct: false
      },
      {
        text: {
          de: "Nur im Notfall",
          fr: "Seulement en cas de détresse"
        },
        correct: true
      },
      {
        text: {
          de: "Im Notfall und zu Testzwecken",
          fr: "En cas de détresse et à des ﬁns d'essai"
        },
        correct: false
      },
      {
        text: {
          de: "Beim Herannahen von Rettungsfahrzeugen",
          fr: "A l'approche des véhicules de secours"
        },
        correct: false
      }
    ]
  },
  // Frage 113
  {
    question: {
      de: "Wie kann eine Satelliten-Seenotfunkbake (EPIRB) im Notfall aktiviert werden?",
      fr: "Comment une balise de détresse maritime par satellite (RLS) peut-elle être activée en cas d’une détresse ?"
    },
    answers: [
      {
        text: {
          de: "Manuell oder automatisch",
          fr: "Manuellement ou automatiquement"
        },
        correct: true
      },
      {
        text: {
          de: "Nur manuell",
          fr: "Manuellement uniquement"
        },
        correct: false
      },
      {
        text: {
          de: "Nur automatisch",
          fr: "Seulement automatiquement"
        },
        correct: false
      },
      {
        text: {
          de: "Durch das COSPAS-SARSAT-System",
          fr: "Par le système COSPAS-SARSAT"
        },
        correct: false
      }
    ]
  },
  // Frage 114
  {
    question: {
      de: "Welche Informationen enthält die Aussendung einer Satelliten-Seenotfunkbake (EPIRB)?",
      fr: "Quelles sont les informations transmises lors du déclenchement d'une balise de détresse maritime par satellite (RLS) ?"
    },
    answers: [
      {
        text: {
          de: "Notsignal, Schiffstyp, Art des Notfalls",
          fr: "Signal de détresse, type de navire, type d'urgence"
        },
        correct: false
      },
      {
        text: {
          de: "Falls vorhanden Position mittels GPS, Identifikationsmerkmal, Zielhafen",
          fr: "Position par GPS, si disponible, élément d'identiﬁcation, port de destination"
        },
        correct: false
      },
      {
        text: {
          de: "Art des Notfalls, Position mittels GPS, falls vorhanden Rufzeichen",
          fr: "Type de détresse, position via GPS, si disponible, indicatif d'appel"
        },
        correct: false
      },
      {
        text: {
          de: "Notsignal, MMSI, falls vorhanden Position mittels GPS",
          fr: "Signal de détresse, MMSI, position par GPS, si disponible"
        },
        correct: true
      }
    ]
  },
  // Frage 115
  {
    question: {
      de: "Wie lange dauert es in den Seegebieten A1 bis A3, bis der Alarm einer COSPAS-SARSAT-Satelliten- Seenotfunkbake (EPIRB), mit GPS-Empfänger, bei der zuständigen Seenotleitung (MRCC) ankommt?",
      fr: "Combien de temps faut-il dans les zones maritimes A1 à A3 pour que l'alarme d'une balise de détresse maritime à satellite COSPAS-SARSAT (RLS), équipée d’un GPS, atteigne le centre d'intervention de détresse maritime (MRCC) compétent ?"
    },
    answers: [
      {
        text: {
          de: "Wenige Minuten",
          fr: "Quelques minutes"
        },
        correct: true
      },
      {
        text: {
          de: "Bis zu 30 Minuten",
          fr: "Jusqu'à 30 minutes"
        },
        correct: false
      },
      {
        text: {
          de: "Bis zu 2 Stunden",
          fr: "Jusqu'à 2 heures"
        },
        correct: false
      },
      {
        text: {
          de: "Bis zu 4 Stunden",
          fr: "Jusqu'à 4 heures"
        },
        correct: false
      }
    ]
  },
  // Frage 116
  {
    question: {
      de: "Wie lange kann es unter ungünstigen Bedingungen von der Aktivierung einer COSPAS-SARSAT- Satelliten-Seenotfunkbake ohne GPS bis zum Empfang der Position im MRCC dauern?",
      fr: "Dans des conditions défavorables, combien de temps peut-il s'écouler entre l'activation d'une balise de détresse maritime par satellite COSPAS- SARSAT sans GPS et la réception de la position dans le MRCC ?"
    },
    answers: [
      {
        text: {
          de: "Bis zu 8 Stunden",
          fr: "Jusqu'à 8 heures"
        },
        correct: false
      },
      {
        text: {
          de: "Bis zu 2 Stunden",
          fr: "Jusqu'à 2 heures"
        },
        correct: true
      },
      {
        text: {
          de: "Bis zu 12 Stunden",
          fr: "Jusqu'à 12 heures"
        },
        correct: false
      },
      {
        text: {
          de: "Bis zu einem Tag",
          fr: "Jusqu'à un jour"
        },
        correct: false
      }
    ]
  },
  // Frage 117
  {
    question: {
      de: "Welches Navigationsgerät empfängt das Signal eines aktivierten Transponders für Suche und Rettung (SART)?",
      fr: "Quel équipement de radionavigation reçoit le signal d'un transpondeur activé pour la recherche et le sauvetage (SART) ?"
    },
    answers: [
      {
        text: {
          de: "Radargerät",
          fr: "Unité radar"
        },
        correct: true
      },
      {
        text: {
          de: "DSC-Controller",
          fr: "Contrôleur ASN"
        },
        correct: false
      },
      {
        text: {
          de: "NAVTEX-Gerät",
          fr: "Dispositif NAVTEX"
        },
        correct: false
      },
      {
        text: {
          de: "GPS-Empfänger",
          fr: "Récepteur GPS"
        },
        correct: false
      }
    ]
  },
  // Frage 118
  {
    question: {
      de: "Warum dauert es unter ungünstigen Bedingungen von der Aktivierung einer COSPAS-SARSAT-Satelliten- Seenotfunkbake ohne GPS bis zum Empfang der Position im MRCC bis zu zwei Stunden?",
      fr: "Pourquoi faut-il jusqu'à deux heures dans des conditions défavorables pour passer de l'activation d'une balise de satellite COSPAS-SARSAT sans GPS à la réception de la position dans le MRCC ?"
    },
    answers: [
      {
        text: {
          de: "Die niedrige Datenrate im Uplink ermöglicht keine hohe Übertragungsgeschwindigkeit",
          fr: "Le faible débit de données sur la liaison montante ne permet pas une vitesse de transmission élevée"
        },
        correct: false
      },
      {
        text: {
          de: "Hoher Seegang behindert die Funkwellenausbreitung zum geostationären COSPAS-SARSAT- Satelliten (GEOSAR)",
          fr: "De fortes vagues entravent la propagation des ondes radioélectriques vers le satellite géostationnaire COSPAS-SARSAT (GEOSAR)"
        },
        correct: false
      },
      {
        text: {
          de: "Es müssen Überflüge der umlaufenden COSPAS-SARSAT-Satelliten abgewartet werden",
          fr: "Il faut attendre le survol des satellites COSPAS-SARSAT en orbite"
        },
        correct: true
      },
      {
        text: {
          de: "Schlechte Wetterverhältnisse behindern die Übertragung der Daten vom COSPAS-SARSAT- Satelliten zur Bodenstation (LUT)",
          fr: "Les mauvaises conditions météorologiques entravent la transmission des données du satellite COSPAS-SARSAT à la station au sol (LUT)"
        },
        correct: false
      }
    ]
  },
  // Frage 119
  {
    question: {
      de: "Zu welchem Zweck benutzen Satelliten-Seenotfunkbaken (EPIRB) die Frequenzen 121,5 MHz und 406 MHz?",
      fr: "Dans quel but les balises de détresse maritime par satellite (RLS) utilisent-elles les fréquences 121,5 MHz et 406 MHz ?"
    },
    answers: [
      {
        text: {
          de: "121,5 MHz zur Peilung (Homing), 406 MHz zur Alarmierung und Positionsbestimmung",
          fr: "121,5 MHz pour la localisation (homing), 406 MHz pour l'alerte et le positionnement"
        },
        correct: true
      },
      {
        text: {
          de: "121,5 MHz zur Peilung (Homing), 406 MHz zur Kommunikation",
          fr: "121,5 MHz pour la localisation (homing), 406 MHz pour la communication"
        },
        correct: false
      },
      {
        text: {
          de: "121,5 MHz zur Identifikation, 406 MHz zur Peilung (Homing)",
          fr: "121,5 MHz pour l'identiﬁcation, 406 MHz pour la localisation (homing)"
        },
        correct: false
      },
      {
        text: {
          de: "121,5 MHz zur Kommunikation, 406 MHz zur Alarmierung und Positionsbestimmung",
          fr: "121,5 MHz pour la communication, 406 MHz pour l'alarme et le positionnement"
        },
        correct: false
      }
    ]
  },
  // Frage 120
  {
    question: {
      de: "Was ist zu tun, bevor die Satelliten-Seenotfunkbake (EPIRB) für Wartungszwecke aus ihrer Halterung entfernt werden kann?",
      fr: "Que faut-il faire avant de retirer la balise de détresse maritime par satellite (RLS) de son support à des ﬁns d'entretien ?"
    },
    answers: [
      {
        text: {
          de: "Sicherung der EPIRB lösen",
          fr: "Désactiver la sécurité de la balise de détresse maritime par satellite (RLS)"
        },
        correct: false
      },
      {
        text: {
          de: "MRCC informieren",
          fr: "Informer le MRCC"
        },
        correct: false
      },
      {
        text: {
          de: "Keine besonderen Vorkehrungen treffen",
          fr: "Ne pas prendre de précautions particulières"
        },
        correct: false
      },
      {
        text: {
          de: "Sicherstellen, dass kein Fehlalarm ausgelöst wird",
          fr: "Veiller à ce qu'aucune fausse alerte ne soit déclenchée"
        },
        correct: true
      }
    ]
  },
  // Frage 121
  {
    question: {
      de: "Wie erscheint die Aussendung eines Radartransponders für Suche und Rettung (SART) auf einem Radarbildschirm, wenn das Schiff in Not weit entfernt ist?",
      fr: "Comment la transmission d'un transpondeur radar pour la recherche et le sauvetage (SART) apparaît-elle sur un écran radar lorsque le navire en détresse est très éloigné ?"
    },
    answers: [
      {
        text: {
          de: "Die Aussendung eines Transponders ist auf dem Radarschirm nicht sichtbar",
          fr: "La transmission d'un transpondeur n'est pas visible sur l'écran radar"
        },
        correct: false
      },
      {
        text: {
          de: "Als Linie von zwölf Punkten",
          fr: "Sous forme de ligne de douze points"
        },
        correct: true
      },
      {
        text: {
          de: "Als lange Linie",
          fr: "Sous forme d’une longue ligne"
        },
        correct: false
      },
      {
        text: {
          de: "Als Linie von mindestens drei Punkten",
          fr: "Sous forme de ligne d'au moins trois points"
        },
        correct: false
      }
    ]
  },
  // Frage 122
  {
    question: {
      de: "Welche Vorteile hat eine UKW-Seefunkanlage gegenüber einem Mobiltelefon in einer Notsituation?",
      fr: "Quels sont les avantages d'un équipement radioélectrique en bande VHF maritime par rapport à un téléphone mobile dans une situation de détresse ?"
    },
    answers: [
      {
        text: {
          de: "Hohe und gleichbleibende Sprachqualität",
          fr: "Qualité vocale élevée et constante"
        },
        correct: false
      },
      {
        text: {
          de: "Einhaltung des Fernmeldegeheimnisses und des Abhörverbots",
          fr: "Respect du secret des radiocommunications et interdiction d'interception"
        },
        correct: false
      },
      {
        text: {
          de: "Digitale und sichere Sprachübertragung",
          fr: "Transmission vocale numérique et sécurisée"
        },
        correct: false
      },
      {
        text: {
          de: "Allgemeine Alarmierungsmöglichkeit",
          fr: "Possibilité d’émettre une alerte de détresse générale"
        },
        correct: true
      }
    ]
  },
  // Frage 123
  {
    question: {
      de: "Welchen Vorteil hat eine UKW-Seefunkanlage gegenüber einem Mobiltelefon, wenn in einer Notsituation andere Fahrzeuge in Sicht sind und um Hilfe gebeten werden sollen?",
      fr: "Quel est l'avantage d'un équipement VHF en bandes maritimes par rapport à un téléphone mobile lorsqu'en situation de détresse, d'autres véhicules sont en vue et doivent être appelés à l’aide ?"
    },
    answers: [
      {
        text: {
          de: "Erreichbarkeit aller Seefunkstellen im Seegebiet A1",
          fr: "Accessibilité de toutes les stations de radio maritime dans la zone maritime A1"
        },
        correct: false
      },
      {
        text: {
          de: "Erreichbarkeit aller Rettungsfahrzeuge in Küstennähe",
          fr: "Accessibilité de tous les véhicules de secours à proximité des côtes"
        },
        correct: false
      },
      {
        text: {
          de: "Erreichbarkeit aller in Funkreichweite befindlichen Seefunkstellen",
          fr: "Accessibilité de toutes les stations radio maritimes à portée radioélectrique"
        },
        correct: true
      },
      {
        text: {
          de: "Erreichbarkeit aller Seefunkstellen in den Seegebieten A1 und A2",
          fr: "Accessibilité de toutes les stations maritimes dans les zones maritimes A1 et A2"
        },
        correct: false
      }
    ]
  },
  // Frage 124
  {
    question: {
      de: "Mit welcher Meldung werden die Funkstellen davon unterrichtet, dass der Notverkehr beendet ist?",
      fr: "Par quel message les stations sont-elles informées que le traﬁc de détresse a pris ﬁn ?"
    },
    answers: [
      {
        text: {
          de: "Meldung, die mit SILENCE MAYDAY abschließt",
          fr: "Message se terminant par SILENCE MAYDAY"
        },
        correct: false
      },
      {
        text: {
          de: "Meldung, die mit SILENCE FINI abschließt",
          fr: "Message se terminant par SILENCE FINI"
        },
        correct: true
      },
      {
        text: {
          de: "Meldung, die mit OVER AND OUT abschließt",
          fr: "Message se terminant par OVER AND OUT"
        },
        correct: false
      },
      {
        text: {
          de: "Meldung, die mit MASTER abschließt",
          fr: "Message se terminant par MASTER"
        },
        correct: false
      }
    ]
  },
  // Frage 125
  {
    question: {
      de: "Warum ist ein Mobiltelefon gegenüber einer UKW-Seefunkanlage keine Alternative, wenn in einer Notsituation die Such- und Rettungsmaßnahmen anderen Schiffen bekannt gemacht werden müssen?",
      fr: "Pourquoi le téléphone mobile n'est-il pas une alternative à un équipement radioélectrique en bandes VHF maritimes lorsqu'en situation d’une détresse, les opérations de recherche et de sauvetage doivent être portées à la connaissance des autres vaisseaux ?"
    },
    answers: [
      {
        text: {
          de: "Telefongespräche können von weiteren Schiffen nicht mitgehört werden, wichtige Informationen zur Hilfeleistung und Rettung sind nicht für alle Beteiligten verfügbar",
          fr: "Les conversations téléphoniques ne peuvent pas être entendues par d'autres vaisseaux, des informations importantes sur l'assistance et le sauvetage ne sont pas accessibles à toutes les parties"
        },
        correct: true
      },
      {
        text: {
          de: "Telefongespräche können von weiteren Schiffen nicht bestätigt werden, der Seenotleitung (MRCC) fehlen daher wichtige Informationen",
          fr: "Les appels téléphoniques ne peuvent pas être conﬁrmés par d'autres vaisseaux, de ce fait des informations importantes manquent pour l’opération de la détresse (MRCC)"
        },
        correct: false
      },
      {
        text: {
          de: "Telefongespräche können von Küstenfunkstellen nicht bestätigt werden, wichtige Informationen fehlen daher für die Koordination vor Ort",
          fr: "Les appels téléphoniques ne peuvent pas être conﬁrmés par les stations côtières, des informations importantes pour la coordination locale font donc défaut"
        },
        correct: false
      },
      {
        text: {
          de: "Telefongespräche können vom On-Scene-Co-ordinator (OSC) nicht mitgehört werden, wichtige Informationen sind nur bei der Seenotleitung (MRCC) vorhanden",
          fr: "Les appels téléphoniques ne peuvent pas être entendus par le coordinateur sur place (OSC), les informations importantes ne sont disponibles qu'au Centre d’opération de détresse maritime (MRCC)"
        },
        correct: false
      }
    ]
  },
  // Frage 126
  {
    question: {
      de: "Welche Funktion hat ein Radartransponder für Suche und Rettung (Search and Rescue Transponder [SART])?",
      fr: "Quelle est la fonction d'un transpondeur radar de recherche et de sauvetage (SART) ?"
    },
    answers: [
      {
        text: {
          de: "Aussendung von Ortungsfunksignalen, die im Seenotfall das Auffinden des verunglückten Fahrzeuges mittels Radars erleichtern sollen",
          fr: "Transmission de signaux de radiolocalisation, qui en cas d’une détresse maritime devraient permettre de localiser plus facilement par radar le véhicule accidenté"
        },
        correct: true
      },
      {
        text: {
          de: "Automatische Aussendung der Notposition über UKW an Küsten- bzw. Schiffsfunkstellen",
          fr: "Transmission automatique de la position de détresse par VHF aux stations côtières ou aux stations de navire"
        },
        correct: false
      },
      {
        text: {
          de: "Automatische Übermittlung der Position des in Not befindlichen Fahrzeuges über die COSPAS- SARSAT-Satelliten",
          fr: "Transmission automatique de la position du véhicule en détresse via les satellites COSPAS-SARSAT"
        },
        correct: false
      },
      {
        text: {
          de: "Reflexion von Radarstrahlen und Erzeugung eines deutlichen Echos auf Radarbildschirmen",
          fr: "Réﬂexion des faisceaux radar et génération d'un écho clair sur les écrans radar"
        },
        correct: false
      }
    ]
  },
  // Frage 127
  {
    question: {
      de: "Welche Funktion hat eine Satelliten-Seenotfunkbake (Emergency Position-Indicating-Radio-Beacon [EPIRB])?",
      fr: "Quelle est la fonction d’une balise de détresse par satellite (RLS)?"
    },
    answers: [
      {
        text: {
          de: "Kommunikation im UKW-Bereich zwischen Rettungs- und SAR- Fahrzeugen bzw. dem MRCC",
          fr: "Communication dans la bande VHF entre les embarcations de sauvetage et les véhicules SAR ou MRCC"
        },
        correct: false
      },
      {
        text: {
          de: "Aussendung einer Notmeldung auf den Notfrequenzen der Luftfahrt (121,5 MHz oder 243 MHz), die von den Luftfahrzeugen bestätigt wird",
          fr: "Émission d’un message de détresse sur les fréquences de détresse de l'aviation (121,5 MHz ou 243 MHz), qui est conﬁrmé par les aéronefs"
        },
        correct: false
      },
      {
        text: {
          de: "Notalarmierung, Identifikation und Kennzeichnung der Notposition",
          fr: "Émission d’une alerte de détresse, de l’identiﬁcation et du marquage de la position de détresse"
        },
        correct: true
      },
      {
        text: {
          de: "Ortung mittels Radars und Erleichterung des Auffindens des Havaristen ermöglichen",
          fr: "Permettre la localisation par radar et faciliter la localisation de la personne ou navire en détresse"
        },
        correct: false
      }
    ]
  }
];
