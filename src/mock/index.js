// mock api
const superagent = require('superagent');
const mock = require('superagent-mocker')(superagent);

let allUseMock = true;


allUseMock && mock.get(`/case/query`, req => {
    console.log('请求的参数是',req)
    return {
        body: {
            status: 0,
            data: {
                caseList: [
                    {
                        caseId: 1,
                        policyNo: '111111',
                        insuredPersonName: 'xx配送公司',
                        accidentPerson: '张三',
                        insureType: 60,
                        insureTypeName: '加盟骑手意外险',
                        claimTime: '2018-09-20 19:30:30',
                        accidentDistrict: '北京市北京市朝阳区',
                        accidentPlace: '望京soho',
                        parentAccidentTypeDescList: [
                            '交通事故-本人受伤',
                            '交通事故-他人受伤'
                        ],
                        caseSetAmountCent: 10000,
                        status: 110,
                        statusDesc: '立案中',
                        currentProcessor: '张三',
                        permissions: '1000'
                    },
                    {
                        caseId: 2,
                        policyNo: '111111',
                        insuredPersonName: '李四',
                        accidentPerson: '李四',
                        insureType: 60,
                        insureTypeName: '众包骑手意外险',
                        claimTime: '2018-09-20 19:30:30',
                        accidentDistrict: '北京市北京市朝阳区',
                        accidentPlace: '望京soho',
                        parentAccidentTypeDescList: [
                            '交通事故-本人受伤',
                            '交通事故-他人受伤'
                        ],
                        caseSetAmountCent: 10000,
                        status: 120,
                        statusDesc: '立案中',
                        currentProcessor: '张三',
                        permissions: '0101'
                    },
                    {
                        caseId: 3,
                        policyNo: '111111',
                        insuredPersonName: '李储岩',
                        accidentPerson: '李储岩',
                        insureType: 60,
                        insureTypeName: '李储岩',
                        claimTime: '2018-09-20 19:30:30',
                        accidentDistrict: '李储岩',
                        accidentPlace: '李储岩',
                        parentAccidentTypeDescList: [
                            '交通事故-本人受伤',
                            '交通事故-他人受伤'
                        ],
                        caseSetAmountCent: 10000,
                        status: 120,
                        statusDesc: '李储岩',
                        currentProcessor: '张三',
                        permissions: '0101'
                    }

                ],
                pageData: {
                    pageNum: req.query.pageNum,
                    pageSize: 10,
                    totalPage: 10
                }
            }
        }
    };
});