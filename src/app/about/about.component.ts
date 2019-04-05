import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  ownerName: string = 'Prystupa Vitaly Alexandrovich';
  Address: string = "st. Bukovinska 18 ● Ukraine(Rivne) ● 33027 ●";
  phoneNumber: string = '+38 (067) 333-94-82'; 
  Email: string = 'horaciy@gmail.com';
  Goal: string = 'Employment';
  Birth: string = '31 August 1996 year';
  Wedlock: string = 'Not married.';
  Children: string = 'Do not have children.';
  Trip: string = 'Ready for business trips, both in Ukraine and abroad.';
  Habits: string = 'Harmful habits are absent.';
  Experience = ['Making software.', 'Code edit.', 'Debug programs and problems solving.', 
  'Making projects, presentations.', 'Applications development and their constructions.', 
  'RivneEnergo(ROE) - programmer engineer.'];
  Education = ['2002 - 2009 Ukraine(Rivne), Education Complex №12 (mathematical direction)',
'2009 - 2011 Ukraine(Rivne), Economic-Legal Lyceum',
'2011 - 2015 Ukraine(Rivne), Medical college',
'2015 - in progress Ukraine(Rivne), NUWM (Banking business) + Military department(->platoon commander)(at NUWM)',
'2017 - in progress Ukraine(Rivne), Computer academy "STEP"(Software development)',];
Additional = ['Ability of interpersonal business communication;',
'Organization and planning of working time;',
'Business Leadership Skills;',
'Attentiveness to trifles;',
'Analytical abilities needed to find solutions to problem situations;',
'Probating flexibility;',
'Confident PC user;',
'Knowledge of the complete family of MS Office;',
'Knowledge of all kinds of office equipment;',
'Experience work in Ethernet;',
'Skills to work with documentation in ukrainian, russian and english.',
'С++, С# "ASP.net(MVC, WEB FORMS)", SQL, JavaScript, PHP, Typescript, Angular, React.',
'HTML, CSS, XML.',
'SOLID(DRY), OOD, OOA, ООP.',
'Entity, JQuery.',
'WCF, WPF, WF, REST, ASP.NET.',
'UML',
'VS2015, VS2017, VS2019 prev, PHPStorm, VSCode, Microsoft SQL Server Management Studio 2017, MySQL.',
'English(Intermediate low) => learn.',
'Russian(Native speaker)'];

   constructor() { }

  ngOnInit() {
  }

}
