# citz-data-bc-service-devops-specialist-req99120

## Instructions for IS-27 DevOps Specialist Position

For this technical assignment, we are asking you to provide a **PRIVATE** repository that houses artifacts used to generate a container of a given application, and other artifacts that would be used to deploy said container into a cloud container platform. An example of these artifacts should come in the form of the following:

* A Dockerfile and docker-compose file that demonstrates your knowledge of local containerization
* Kubernetes templates for basic kubernetes objects like deployment configs, stateful sets, pods, services and routes, that will utilize the image produced by your Dockerfile
* Deployment pipelines using technologies such as Github Actions or Tekton pipelines or Jenkins etc.

Be aware that you will be asked to defend your choice of technology if your solution passes marking criteria and proceeds to the next stage of marking that follows this technical assignment.

For the purposes of this technical exercise, please deploy the example Expressjs API to a cloud container platform of your choosing.  Your artifacts will target/utilize the provided Expressjs API included in this repository.  You are not required to keep live the solution in your cloud container platform of choice for the initial assessment.   

Documentation required for this technical assignment should be found in a README.md file found at the root of your repository. This documentation should have at minimum the required commands that utilize your Dockerfile and docker-compose file to generate a docker image of the Expressjs API using your Dockerfile. For the purposes of this exercise, it is safe to assume that the marking panel will have Docker Desktop installed on their local machine in order to evaluate your submission.  You must also include a visual artifact that outlines the process of your pipeline.

Your kubernetes manifest used to deploy your generated Docker image of the Expressjs API should include a readiness and liveness probe that will utilize the `/api/health` endpoint found in the API. The endpoint returns a 200 response code, and your probes should utilize this response to evaluate whether or not your deployment is healthy.

### Important!

If your submission passes marking criteria and is selected to proceed to the next round of evaluations, you will be responsible for demoing your deployment pipeline in a live 15 minute demo to a marking panel via a Microsoft Teams call.  This will require you to have a working solution in a cloud container platform of your choice.

Your demo will be graded on the following:

* ease of deployment
* maintainability of solution provided
* whether or not your solution works without warning or error

It is highly suggested that your deployment pipelines developed for this solution come pre-tested, in order to ensure that an eventual demo goes smoothly.

## What to Submit:

### Github Repository

Create a **PRIVATE** GitHub repository using your GitHub Account. The name of the repository should use the following convention:

[FIRST_NAME]-[LAST_NAME]-IS27-devops-specialist-competition-req99120

Your working solution should be present on the **main** branch of your private repository. Please trim any extraneous branches prior to submission as they
will not be evaluated.

When you are ready to submit your solution, email adam.kroon@gov.bc.ca with the link to your private repository, and invite the following Github ID as a collaborator in order to view and clone your solution for marking purposes:

* akroon3r

Your solution will be cloned at 12:01pm PST on Thursday June 1 2023, after the submission window has closed. Any commits pushed to your repository after this time **will not** be included in the marking of your solution.

Reminder, please include all documentation required for your solution in a README.md file found in the root directory of your repository. Use of diagrams in your documentation is required.

### Dockerfile Component

The Dockerfile created for this assignment should produce a working image of the Express API that accompanies this README. The Dockerfile should be utilized by a docker-compose file found at the root of your submission. The name of the container should be simple and easy to read.

### Kubernetes Component

The Kubernetes template created for this assignment can come in the form of one or many YAML files containing objects such as deployments, deployment configs, stateful sets, pods, services and routes. The yaml files should be organized and easy to read. If parameters are used to demonstrate scalability of your templates to multiple environments, environment variables should be descriptive enough such that a user with little or no knowledge of your deployment pipeline can figure out how to configure a deployment.

### Pipeline Component

An example of steps provided in a pipeline solution should take the form of the following:

* A build, tag and push step that places your docker image into an image repository or image storage object.
* A step that deploys the image into a cloud container environment 
* A stage that utilizes the readiness and liveness probes on your kubernetes manifest to return the pod/container status when they are running post-deployment

## Questions for Completing This Submission

**You are encouraged to use your own discretion when faced with uncertainty in the technical assignment.**

If there is a problem with the assignment which prevents you from submitting it, please send an email to the address that sent this technical assignment to you.

The marking panel does have the right to refuse answering questions, if questions asked are not equitable to all participants of this challenge.

## Assessment Scoring

### Github Repository Component
| Rating                  | Criteria                                                                        |
|-------------------------|---------------------------------------------------------------------------------|
| Pass/Acceptable         | * Organized, easy to read                                                       |
|                         | * Solution is present on main branch of repository                              |
|                         | * Extraneous branches removed/trimmed from repo                                 |
| Fail/Unacceptable       | * Any of the requirements of Pass/Acceptable are not met                        |

### BONUS Github Repository Wiki Documentation
| Rating                  | Criteria                                                                        |
|-------------------------|---------------------------------------------------------------------------------|
| Pass/Acceptable         | * Provide graphical component on a wiki page that outlines your pipeline and    |
|                         |   Environments and how each component of your eco system works                  |
| Fail/Unacceptable       | * Any of the requires of Pass/Acceptable are not met                            |

### Dockerfile and Docker-compose Component
| Rating                  | Criteria                                                                        |
|-------------------------|---------------------------------------------------------------------------------|
| Pass/Acceptable         | * Utilizes single or multi stage build to produce image                         |
|                         | * Readable, commenting when necessary to explain pattern used to produce image  |
|                         | * Solution produces an image on a local workstation without error               |
| Fail/Unacceptable       | * Any of the requirements of Pass/Acceptable are not met                        |

### Kubernetes Component
| Rating                  | Criteria                                                                                |
|-------------------------|-----------------------------------------------------------------------------------------|
| Pass/Acceptable         | * Solution utilizes image repository and image created using Dockerfile/docker-compose  |
|                         | * One or many YAML files                                                                |
|                         | * Readable, well organized                                                              |
| Fail/Unacceptable       | * Any of the requirements of Pass/Acceptable are not met                                |


### Pipeline Component
| Rating                  | Criteria                                                                        |
|-------------------------|---------------------------------------------------------------------------------|
| Pass/Acceptable         | * Build, tag, push step that places docker image into repository                |
|                         | * Deploys image into cloud container platform of your choice                    |
|                         | * A stage used to report when API is healthy and ready to be consumed           |
|                         | * Pipeline is documented or accompanied by documentation to explain pattern used|
|                         | * Screen capture or link to logfiles from successful deployment                 |
| Fail/Unacceptable       | * Any of the requirements of Pass/Acceptable are not met                        |
