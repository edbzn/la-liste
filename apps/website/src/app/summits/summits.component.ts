import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'la-liste-summits',
  template: `<ol reversed>
    <li *ngFor="let summit of summits">
      <span>[{{ summit.date }}]</span>
      <a [routerLink]="['summits', summit.name]">{{ summit.name }}</a>
      <span class="thin p"> {{ summit.description }} </span>
    </li>
  </ol> `,
  styles: [
    `
      .p {
        display: block;
      }

      li {
        padding: 6px 0;
      }

      li:first-child {
        padding: 0;
      }
    `,
  ],
})
export class SummitsComponent implements OnInit {
  summits = [
    {
      name: 'Mont Blanc : Arête de Peuterey depuis bivouac Eccles',
      description: `A 10 m du bivouac supérieur, rappel pour atteindre les pentes raides à remonter vers le col Eccles ; la rimaye passe à droite. Descente du couloir versant Peuterey ; équipé à 60 m (merci à Gabarrou) et traverser en direction de col de Peuterey. Mixte en mauvais rocher sur les pentes-couloir, puis à droite pour passer le Grand Pilier d'Angle. Remonter la ligne de crête très esthétique et raide pour sortir vers l'extrémité S du Mont Blanc de Courmayeur en laissant les grandes corniches à droite. Rejoindre le sommet du Mont Blanc et descente de l'arête des Bosses pour le refuge de Tête Rousse.`,
      date: new Date('12/11/2020').toLocaleDateString('fr-Fr', {}),
    },
    {
      name:
        'Mont Blanc : Sortie depuis le sommet du Pilier Rouge du Brouillard',
      description: `Jusqu'à la Pointe Louis Amédée (1h30 à 3h selon que l'arête soit sèche ou en mixte). Arête du Brouillard jusqu'au Mont Blanc de Courmayeur. Ne pas trop s'éloigner du fil de l'arête et suivre les traces de crampons sur le rocher. Contourner le Mont Blanc de Courmayeur par la gauche et rejoindre les vastes croupes jusqu'au sommet du Mont Blanc (2 à 4h).`,
      date: new Date('10/11/2020').toLocaleDateString('fr-Fr', {}),
    },
  ];

  ngOnInit(): void {}
}
