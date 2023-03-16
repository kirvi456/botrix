import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { graphviz } from 'd3-graphviz';
import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material';

import LVL1 from '../../assets/LVL1.jpg';
import { countInformation } from './types';

type TreeProps = {
    countInfo: countInformation;
};

export const Tree: React.FC<TreeProps> = ({ countInfo }) => {
    const paper = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setWidth((paper.current as unknown as HTMLDivElement).offsetWidth);
        setHeight((paper.current as unknown as HTMLDivElement).offsetHeight);
    }, []);

    useEffect(() => {
        const text = countInfo.connections;

        const lista: { node: string; child1: string; child2: string }[] = [];

        const nodos = text.split(';');

        nodos.forEach((current, index) => {
            if (index < nodos.length - 1) {
                const el1 = current.split('->');
                if (
                    lista.filter((el, index) => {
                        if (el.node == el1[0]) {
                            lista[index].child2 = el1[1];
                            return true;
                        }
                        return false;
                    }).length == 0
                ) {
                    lista.push({ node: el1[0], child1: el1[1], child2: '' });
                }
            }
        });

        nodos.forEach((current, index) => {
            if (index < nodos.length - 1) {
                const el1 = current.split('->');
                if (lista.filter((el, index) => el.node == el1[1]).length == 0) {
                    lista.push({ node: el1[1], child1: '', child2: '' });
                }
            }
        });

        let str: string = '';
        lista.forEach((el) => {
            str += `node${el.node}[label = "<f0> |<f1> ${el.node}|<f2> "];\n`;
        });

        lista.forEach((el) => {
            str += el.child1 != '' ? `"node${el.node}":f0 -> "node${el.child1}":f1;\n` : '';
            str += el.child2 != '' ? `"node${el.node}":f2 -> "node${el.child2}":f1;\n` : '';
        });

        console.log(str);

        graphviz('#grap').fit(true).width(400).height(400).scale(0.75).renderDot(`
        
        digraph G {

            graph [ranksep=0.5, bgcolor=transparent]; 
            node[shape=record,height=.1,style=filled, fillcolor="#15202b", fontcolor="white", color="white", tooltip="jfdskl"];
            edge[color="white"];
            
            
            ${str}

            
          }
        `);
    }, [width, height]);

    return (
        <Stack
            sx={{
                width: 700,
                maxWidth: '90%',
                overflow: 'hidden',
            }}
            spacing={2}
        >
            <Paper elevation={12}>
                <Stack>
                    <Typography
                        variant='h6'
                        sx={{ textAlign: 'center', pt: 1, pb: 1, backgroundColor: '' }}
                    >
                        My Matrix
                    </Typography>
                    <Divider />
                    <Box
                        ref={paper}
                        id='grap'
                        sx={{
                            '&:hover': { cursor: 'pointer' },
                            '&:active': { cursor: 'grab' },
                            height: 350,
                            overflow: 'hidde',
                        }}
                    ></Box>
                </Stack>
            </Paper>
            <Typography>My Matrix</Typography>

            <Stack spacing={1}>
                {countInfo.matrixNodes.map((node, index) => (
                    <Paper
                        sx={{ overflow: 'hidden' }}
                        key={index}
                    >
                        <Stack
                            direction='row'
                            alignItems='center'
                            spacing={2}
                        >
                            <img
                                src={LVL1}
                                alt='img lvl'
                                style={{
                                    width: 80,
                                }}
                            />
                            <Stack>
                                <Typography>Token ID: {node.tokenId}</Typography>
                                <Typography
                                    variant='caption'
                                    sx={{ opacity: 0.7 }}
                                >
                                    Wallet: {node.dir}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Paper>
                ))}
            </Stack>
        </Stack>
    );
};
