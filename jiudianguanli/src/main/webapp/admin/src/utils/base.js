const base = {
    get() {
        return {
            url : "http://localhost:8080/jiudianguanli/",
            name: "jiudianguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jiudianguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "酒店管理系统"
        } 
    }
}
export default base
