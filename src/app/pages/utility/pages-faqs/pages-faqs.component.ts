import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgbAccordionModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pages-faqs',
  standalone: true,
  imports: [PageTitleComponent, NgbAccordionModule, NgbCollapseModule, CommonModule],
  templateUrl: './pages-faqs.component.html',
  styleUrl: './pages-faqs.component.scss'
})
export class PagesFaqsComponent {
  breadCrumbItems!: Array<{}>;

  accordionItems = [
    {
      title: 'General Questions',
      description: 'Common queries and concerns',
      questions: [
        {
          id: 1,
          question: 'What is Lorem Ipsum?',
          answer: 'If several languages coalesce, the grammar of the resulting language is more simple.',
        },
        {
          id: 2,
          question: 'Where does it come from?',
          answer: 'Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.',
        },
        {
          id: 3,
          question: 'Why do we use it?',
          answer: 'Their separate existence is a myth. For science, music, sport, etc., Europe uses the same vocabulary.',
        },
      ],
    },
  ];

  privacyPolicyItems = [
    {
      title: 'Privacy Policy',
      description: 'Privacy Policy Questions',
      questions: [
        {
          id: 1,
          question: 'Where can I get some?',
          answer: 'If several languages coalesce, the grammar of the resulting language is more simple.',
        },
        {
          id: 2,
          question: 'Why do we use it?',
          answer: 'Their separate existence is a myth. For science, music, sport, etc., Europe uses the same vocabulary.',
        },
        {
          id: 3,
          question: 'Where does it come from?',
          answer: 'Everyone realizes why a new common language would be desirable, one could refuse to pay expensive translators.',
        },
      ],
    },
  ];

  pricingPlanItems = [
    {
      id: 'faqs-pricing-plans-collapse',
      title: 'Pricing & Plans',
      description: 'Pricing & Plans Questions',
      isOpen: false, // Track if this section is open or collapsed
      questions: [
        {
          id: 1,
          question: 'Where does it come from?',
          answer: 'Everyone realizes why a new common language would be desirable. One could refuse to pay expensive translators.',
        },
        {
          id: 2,
          question: 'What is Lorem Ipsum?',
          answer: 'If several languages coalesce, the grammar of the resulting language is more simple.',
        },
        {
          id: 3,
          question: 'Why do we use it?',
          answer: 'Their separate existence is a myth. For science, music, sport, etc., Europe uses the same vocabulary.',
        },
      ],
    },
  ];

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Utility' },
      { label: 'FAQs', active: true }
    ];
  }


}
