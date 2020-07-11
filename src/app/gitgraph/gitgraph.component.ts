import { Component, OnInit } from '@angular/core';
import { createGitgraph } from '@gitgraph/js';

@Component({
  selector: 'app-gitgraph',
  templateUrl: './gitgraph.component.html',
  styleUrls: ['./gitgraph.component.scss']
})
export class GitgraphComponent implements OnInit {
  graphContainer: any;
  gitgraph: any;
  master: any;
  develop: any;
  aFeature: any;

  constructor() {}

  ngOnInit() {
    this.graphContainer = document.getElementById('graph-container');
    this.gitgraph = createGitgraph(this.graphContainer);
    this.master = this.gitgraph.branch('master');
    this.master.commit('Initial commit');
    this.develop = this.gitgraph.branch('develop');
    this.aFeature = this.gitgraph.branch('a-feature');
    this.aFeature
      .commit('Make it work')
      .commit('Make it right')
      .commit('Make it fast');
    this.develop.merge(this.aFeature);
    this.develop.commit('Prepare v1');
    this.master.merge(this.develop).tag('v1.0.0');
  }
}
