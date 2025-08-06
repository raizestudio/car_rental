import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAgencyStore = defineStore('agency', () => {
  const agencies = ref([
    {
      id: 1,
      name: 'Sixt',
      description:
        'Sixt est une agence de location de voitures internationale, offrant une large gamme de véhicules allant des voitures économiques aux véhicules de luxe.',
    },
    {
      id: 2,
      name: 'Hertz',
      description:
        'Hertz est une entreprise de location de voitures mondiale, proposant une large gamme de véhicules et de services.',
    },
    {
      id: 3,
      name: 'Avis',
      description:
        'Avis est une entreprise de location de voitures qui propose une large sélection de véhicules et un excellent service client.',
    },
    {
      id: 4,
      name: 'Enterprise',
      description:
        'Enterprise est une entreprise de location de voitures qui se distingue par son service client exceptionnel et sa large gamme de véhicules.',
    },
    {
      id: 5,
      name: 'Budget',
      description:
        'Budget est une entreprise de location de voitures qui propose des tarifs abordables et une variété de véhicules.',
    },
    {
      id: 6,
      name: 'Alamo',
      description:
        'Alamo est une entreprise de location de voitures qui se concentre sur les voyageurs de loisirs, offrant des tarifs compétitifs et un service convivial.',
    },
    {
      id: 7,
      name: 'National',
      description:
        'National est une entreprise de location de voitures qui propose des services adaptés aux voyageurs d’affaires et de loisirs.',
    },
    {
      id: 8,
      name: 'Thrifty',
      description:
        'Thrifty est une entreprise de location de voitures qui propose des tarifs compétitifs et une variété de véhicules.',
    },
    {
      id: 9,
      name: 'Dollar',
      description:
        'Dollar est une entreprise de location de voitures qui propose des tarifs abordables et une sélection de véhicules adaptés aux besoins des clients.',
    },
    {
      id: 10,
      name: 'Europcar',
      description:
        'Europcar est une entreprise de location de voitures qui propose une large gamme de véhicules et un service client de qualité.',
    },
  ])

  return { agencies }
})
