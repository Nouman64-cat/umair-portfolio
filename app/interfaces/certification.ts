export interface Certification {
  id: string;
  certificationTitle: string;
  certificationDetails: string;
  certificationIssuedBy: string;
  certificationIssuedDate: string;
  certificationTags: string |  string[];
  certificationShortDescription: string;
  certificationUrl: string;
}
