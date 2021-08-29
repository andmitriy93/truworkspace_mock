export const projects = [
  {
    _id: '123',
    title: 'Marketing Report',
    description: 'Quorterly marketing report for Q3',
    deadline: '1 Dec 21',
    status: 'In Progress',
    percentComplete: 50,
  },
  {
    _id: 'project987123',
    title: 'Hire 3 engineers',
    description: 'Hire 2 backend and 1 frontend engineer',
    deadline: '2 Dec 21',
    status: 'In Progress',
    percentComplete: 70,
  },
  {
    _id: 'project786',
    title: 'Product PRD',
    description: 'Product PRD for the upcoming secret product',
    deadline: '3 Dec 21',
    status: 'In Progress',
    percentComplete: 10,
  },
  {
    _id: 'project787',
    title: 'Super secret project',
    description: 'Cannot tell you, this is a super secret project :(',
    deadline: '3 Dec 21',
    status: 'In Progress',
    percentComplete: 10,
  },
  {
    _id: 'project788',
    title: 'Create ML models',
    description: 'Work with the data science team to create ML models for the super secret project',
    deadline: '31 Dec 21',
    status: 'In Progress',
    percentComplete: 15,
  },
]

export const teams = [
  { title: 'Green Rangers', _id: '1', description: 'We are rangers', departments: [], people: ['A', 'B'], projects: [projects[1]], owner: 'Danielle' },
  { title: 'Red Rangers', _id: '2', description: 'We are rangers', departments: [], people: ['G', 'H'], projects: [projects[0]], owner: 'Danielle' },
  { title: 'Orange Rangers', _id: '3', description: 'We are rangers', departments: [], people: ['S', 'T'], projects: [projects[2]], owner: 'Danielle' },
  { title: 'Purple Rangers', _id: '7', description: 'We are rangers', departments: [], people: ['K', 'M'], projects: [projects[1]], owner: 'Danielle' },
  { title: 'Grey Rangers', _id: '8', description: 'We are rangers', departments: [], people: ['O', 'E'], projects: [projects[3]], owner: 'Danielle' },
  { title: 'White Rangers', _id: '9', description: 'We are rangers', departments: [], people: ['W', 'Y'], projects: [projects[0]], owner: 'Danielle' },
  { title: 'Blue Rangers', _id: '10', description: 'We are rangers', departments: [], people: ['X', 'Z'], projects: [projects[2]], owner: 'Danielle' },
  { title: 'Teal Rangers', _id: '4', description: 'We are rangers', departments: [], people: ['C', 'F'], projects: [projects[3]], owner: 'Danielle' },
]

export const departments = [
  {
    _id: 'd1',
    title: 'Marketing',
    description: 'Some description',
    projects: [projects[0]],
    teams: [teams[0]],
    imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    _id: 'd2',
    title: 'Accounting',
    description: 'Some description',
    projects: [projects[1]],
    teams: [teams[1], teams[2]],
    imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
  },
  {
    _id: 'd3',
    title: 'Engineering',
    description: 'Some description for the eng department',
    projects: [projects[2]],
    teams: [teams[3]],
    imageUrl: 'https://images.unsplash.com/photo-1618422168439-4b03d3a05b15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    _id: 'd4',
    title: 'HR',
    description: 'Some description for the HR department',
    projects: [projects[3]],
    teams: [teams[4]],
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
  },
  { _id: 'd5', title: 'Recruiting', description: 'Some description for recruiting department', projects: [projects[4]], teams: [teams[5]], imageUrl: 'https://images.unsplash.com/photo-1603834305747-b0fb6f8bbfd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80' },
  { _id: 'd6', title: 'Customer Service', description: 'Some description for the Customer Service department', projects: [], teams: [teams[6]], imageUrl: 'https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
  { _id: 'd7', title: 'Security', description: 'Some description for the Security department', projects: [], teams: [teams[7]], imageUrl: 'https://images.unsplash.com/photo-1618371690240-e0d46eead4b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
  { _id: 'd8', title: 'Maintainence', description: 'Some description for the Maintainence department', projects: [], teams: [], imageUrl: 'https://images.unsplash.com/photo-1611288875785-f62fb9b044a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=642&q=80' },
  { _id: 'd9', title: 'Support', description: 'Some description for the Support department', projects: [], teams: [], imageUrl: 'https://images.unsplash.com/photo-1617080090911-91409e3496ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1045&q=80' },
]
