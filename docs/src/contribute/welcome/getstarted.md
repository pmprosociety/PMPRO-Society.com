# How to Contribute

If you are looking to make your first article contribution, follow these steps below.

### Prerequisite 
<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="fork this repository" />

#### If you don't have git on your machine, be sure to [install it](https://github.com/git-guides/install-git).

## Fork this repository

Fork this [repository](https://github.com/pmprosociety/docs) by clicking on the fork button on the top of the page.
This will create a copy of this repository in your Github account.

## Clone the repository

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clone this repository" />

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository you just created, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

For example:

```
git clone https://github.com/this-is-you/docs.git
```

where `this-is-you` is your GitHub username. Here you're copying the contents of the PMPRO Society's article repository on GitHub to your computer.

## Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd docs
```

Now create a branch using the `git checkout` command and name the branch the title of your article (or similar):

```
git checkout -b your-new-branch-name
```

For example:

```
git checkout -b building-pm-teams
```

## Make necessary additions and commit

Now open the `docs/cookbook` folder and add a file using a text editor. This new file would become an article within the cookbook section on PMPRO Society. 

Articles are written with Markdown, which provides simple formatting options for your article. 
See this reference chart for how to format your text: [Markdown](https://markdown-it.github.io/)

When you're done, make sure to save the file with '.md' extension so we know this is a Markdown file.

Add those changes to the branch you just created using the `git add` command:

```
git add myarticletitle.md
```

Now commit those changes using the `git commit` command:

```
git commit -m "Description of your Article"
```

## Push changes to GitHub

Push your changes using the command `git push`:

```
git push origin <add-your-branch-name>
```

replacing `<add-your-branch-name>` with the name of the branch you created earlier.

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

<img style="float: right;" src="/compare-and-pull.png" alt="create a pull request" />

Now submit the pull request.

<img style="float: right;" src="/submit-pull-request.png" alt="submit pull request" />

## Where to go from here?

Congrats! You just completed the standard _fork -> clone -> edit -> pull request_ workflow that you'll encounter often as a contributor! A PMPRO Maintainer will pickup your request see: [contributing](/contribute/)