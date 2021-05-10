export const users = {
    users: [
        {
            id: 'laura',
            patientInfo: {
                name: 'Laura Chen',
                sex: 'female',
                dob: '09/23/1958',
                pcp: "Dr John Doe",
                nextVisit: '05/25/2019',
                homePhone: '402-456-7890',
                mobilePhone: '(236) 561-6354',
                insurance: 'Medicare',
                pharmacy: 'CVS',
                careTeamMembers: ['Dr. John Doe', 'Nurse Ted Smith', 'Social Worker Colleen Jones', 'Sister Sara Chen'],
            },
            tasks: [
                {
                    title: 'Follow up with Vascular surgery',
                    description: '',
                    dateCreated: '05/09/2021',
                    dateDue: '05/30/2021',
                    status: 'Incomplete',
                    owner: 'Dr. John Doe',
                    comments: '',
                    notifications: '',
                },
                {
                    title: 'Cardiology evaluation',
                    description: '',
                    dateCreated: '05/09/2021',
                    dateDue: '06/09/2021',
                    status: 'Incomplete',
                    owner: 'Nurse Ted Smith',
                    comments: '',
                    notifications: '',
                },
            ]
        }
    ],

    
    
}