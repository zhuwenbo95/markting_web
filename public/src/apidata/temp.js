var a = [
    {
        name: '>8个月孕龄的孕期准妈妈',
        type: 'scatter',
        symbolSize: function (value) {
            return Math.round(value[0] / 8);
        },
        data: [
            [0, 0], [50, 80], [100, 60], [150, 80], [200, 100], [250, 60], [300, 0]

        ],

        markPoint: {
            data: [
                {type: 'max', name: '100'},
                {type: 'min', name: '0'}
            ]
        },
        markLine: {
            data: [
                {type: 'average', name: '54'}
            ]
        }
    },
    {
        name: '<8个月孕龄的孕期准妈妈',
        type: 'scatter',
        symbolSize: function (value) {
            return Math.round(value[0] / 8);
        },
        data: [
            [0, 0], [50, 60], [100, 100], [150, 140], [200, 80], [250, 50], [300, 10]

        ],

        markPoint: {
            data: [
                {type: 'max', name: '140'},
                {type: 'min', name: '0'}
            ]
        },
        markLine: {
            data: [
                {type: 'average', name: '63'}
            ]
        }
    },
    {
        name: '0~6个月新妈妈爸爸',
        type: 'scatter',
        symbolSize: function (value) {
            return Math.round(value[0] / 8);
        },
        data: [
            [0, 0], [50, 100], [100, 70], [150, 40], [200, 60], [250, 30], [300, 30]


        ],

        markPoint: {
            data: [
                {type: 'max', name: '110'},
                {type: 'min', name: '0'}
            ]
        },
        markLine: {
            data: [
                {type: 'average', name: '47'}
            ]
        }
    },
    {
        name: '6~24个月宝宝父母',
        type: 'scatter',
        symbolSize: function (value) {
            return Math.round(value[0] / 8);
        },
        data: [
            [0, 0], [50, 120], [100, 80], [150, 40], [200, 10], [250, 10], [300, 0]

        ],

        markPoint: {
            data: [
                {type: 'max', name: '120'},
                {type: 'min', name: '0'}
            ]
        },
        markLine: {
            data: [
                {type: 'average', name: '37'}
            ]
        }
    },
    {
        name: '7-12个月宝宝的会员',
        type: 'scatter',
        symbolSize: function (value) {
            return Math.round(value[0] / 8);
        },
        data: [
            [0, 30], [50, 60], [100, 80], [150, 70], [200, 120], [250, 60], [300, 20]

        ],

        markPoint: {
            data: [
                {type: 'max', name: '120'},
                {type: 'min', name: '30'}
            ]
        },
        markLine: {
            data: [
                {type: 'average', name: '63'}
            ]
        }
    },
]