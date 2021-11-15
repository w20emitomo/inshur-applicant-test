# Cypress Test Project

Hello! This project contains all the code needed to construct some BDD based tests. It's a super simple react / api project with Cypress sprinkled on top.
Add as many or as little BDD tests as you think are needed, but surprise us with your ingenuity!

## Install

Do **_not_** 'Fork' this repository, please instead clone it.

```bash
yarn
```

## Run the tests

```bash
yarn all
```

## Submit your work

Once you're satisfied with your work, please push it up to a public GitHub repository and send us the link.

If you've chosen to clone this repository, use this command to replace the origin URL with a repository URL you've created:

1. `git remote set-url origin [YOUR_REMOTE_URL]`

## BDD tests

Feature: Customer contact details

  Scenario Outline: check the list of customers

    Given the user visits Inshur Test Website
    When the click on details of "<Name>"
    Then the details should have <Name>,<Email>,<Phone>,<City>,<State>,<Country>,<Organization>,<Job Profile>,<Additional Info>

    Examples:
      | Name       | Email | Phone      | City   | State          | Country | Organization | Job Profile        | Additional Info                                               |
      | John Smith | Name  | John Smith | London | Greater London | England | Company 1    | Software Developer | Has Bought a lot of products before and a high Value Customer |


  Scenario: check the list of customers shown error if no users - Negative

    Given the user visits Inshur Test Website
    Then I see message that "No users found"
