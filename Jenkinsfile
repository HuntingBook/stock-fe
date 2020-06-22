pipeline {
    agent {
        label 'docker'
    }
    options {
        // 添加日志打印时间
        timestamps()
        // 设置全局超时
        timeout(time: 10, unit: 'MINUTES')
    }
    parameters {
        choice(name: 'GITHUB_BRANCH', choices: ['master', 'develop'], description: 'checkout github branch')
    }
    environment {
        GITHUB_USER_ID = '2e38b05caf7176776b44c2836cca4ed4e1fa03a4'
        IMAGE_USER_ID = '06989ce7-86fb-43ca-aec0-313d260af382'
        IMAGE_NAME = 'stock-fe:prod'
        REMOTE_IMAGE_NAME = 'localhost:10100/stock-fe:lts'
        IMAGE_TAR = 'stock-fe.tar'
        SSH_NAME = 'stock'
        SSH_DIR = '/opt/cloud/stock-fe'
    }
    stages {
        stage('checkout') {
            options {
                timeout(time: 2, unit: 'MINUTES')
            }
            steps {
                git (credentialsId: "${GITHUB_USER_ID}", url: 'https://github.com/HuntingBook/stock-fe.git', branch: "${GITHUB_BRANCH}")
            }
        }
        stage('docker build') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME} ."
                    sh "docker save ${IMAGE_NAME} > ${IMAGE_TAR}"
                    sh "pwd && ls -l"
                }
            }
        }
        stage('docker push') {
            when {
                expression {
                    "${params.GITHUB_BRANCH}" == "master"
                }
            }
            steps {
                script {
                    withDockerRegistry(credentialsId: "${IMAGE_USER_ID}", url: 'http://localhost:10100') {
                        sh "docker tag ${IMAGE_NAME} ${REMOTE_IMAGE_NAME}"
                        sh "docker push ${REMOTE_IMAGE_NAME}"
                    }
                }
            }
        }
        stage("deploy") {
            when {
                expression {
                    "${params.GITHUB_BRANCH}" == "develop"
                }
            }
            steps {
                script {
                    def rootDir = pwd()
                    step_deploy = load "${rootDir}/deploy.groovy"
                    step_deploy.deploy("${SSH_NAME}", "${IMAGE_TAR}", "${SSH_DIR}", "${IMAGE_NAME}")
                }
            }
        }
    }
    post {
        always {
            // 清理临时容器和镜像
            sh "docker ps -a|grep Exited|awk '{print \$1}'|xargs -I {} docker rm {}"
            sh "docker images|grep '<none>'|awk '{print \$3}'|xargs -I {} docker image rm {} > /dev/null 2>&1 || true"
            cleanWs()
        }
    }
}